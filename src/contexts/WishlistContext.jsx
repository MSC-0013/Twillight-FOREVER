import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const WishlistContext = createContext(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  // Load wishlist data based on user
  useEffect(() => {
    if (user) {
      const savedWishlist = localStorage.getItem(`wishlist_${user.id}`);
      if (savedWishlist) {
        setItems(JSON.parse(savedWishlist));
      }
    } else {
      setItems([]);
    }
  }, [user]);

  // Save wishlist data when items change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(items));
    }
  }, [items, user]);

  const addToWishlist = (product) => {
    setItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => {
    return items.some((item) => item.id === id);
  };

  const clearWishlist = () => {
    setItems([]);
    if (user) {
      localStorage.removeItem(`wishlist_${user.id}`);
    }
  };

  const value = {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
