
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, LogOut, Settings, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const { totalItems, clearCart } = useCart();
  const { items: wishlistItems, clearWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    clearCart();
    clearWishlist();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b-2 border-gradient-to-r from-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FOREVER
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for amazing products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-12 rounded-full border-2 border-gray-200 focus:border-purple-400 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button type="submit" className="ml-3 h-12 px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all">
              Search
            </Button>
          </form>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Wishlist */}
            <Link to="/wishlist" className="relative p-3 text-gray-600 hover:text-purple-600 transition-colors">
              <Heart className="w-7 h-7" />
              {wishlistItems.length > 0 && (
                <Badge className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500">
                  {wishlistItems.length}
                </Badge>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-3 text-gray-600 hover:text-purple-600 transition-colors">
              <ShoppingCart className="w-7 h-7" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
                  {totalItems}
                </Badge>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-12 px-4 rounded-full hover:bg-purple-50">
                    <User className="w-6 h-6" />
                    <span className="ml-2 hidden lg:block font-medium">{user?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 shadow-xl border-2">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      My Orders
                    </Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="flex items-center">
                          <Settings className="w-4 h-4 mr-2" />
                          Admin Dashboard
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" asChild className="hover:bg-purple-50">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </form>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/products"
              className="block px-3 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/wishlist"
              className="flex items-center px-3 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="w-4 h-4 mr-2" />
              Wishlist ({wishlistItems.length})
            </Link>
            <Link
              to="/cart"
              className="flex items-center px-3 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart ({totalItems})
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="block px-3 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
