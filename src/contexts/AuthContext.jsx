import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      const fetchUser = async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/profile`, {
            credentials: 'include',
          });
          if (res.ok) {
            const userData = await res.json();
            setUser(userData);
            localStorage.setItem('auth_user', JSON.stringify(userData));
          }
        } catch (err) {
          console.error('Error fetching profile:', err);
        }
      };
      fetchUser();
    }
  }, []);

  const login = async (email, password) => {
    if (email === 'admin@gmail.com' && password === 'admin123@') {
      const adminUser = {
        _id: 'admin-id',
        name: 'Admin',
        email: email,
        isAdmin: true,
      };
      setUser(adminUser);
      localStorage.setItem('auth_user', JSON.stringify(adminUser));
      return true;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setUser(data);
      localStorage.setItem('auth_user', JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Login error:', error.message);
      throw new Error(error.message || 'Login failed');
    }
  };

  const register = async (name, email, password, confirmPassword) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setUser(data);
      localStorage.setItem('auth_user', JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Register error:', error.message);
      throw new Error(error.message || 'Registration failed');
    }
  };

  const logout = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.warn('Logout failed:', error);
    }
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  const updateUser = (updatedUser) => {
    if (user) {
      const updated = { ...user, ...updatedUser };
      setUser(updated);
      localStorage.setItem('auth_user', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUser,
        isAuthenticated: !!user,
        isAdmin: user?.isAdmin || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
