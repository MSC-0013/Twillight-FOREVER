import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const isWishlisted = isAuthenticated && isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to cart.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to wishlist.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-black overflow-hidden bg-white">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 text-white text-xs">New</Badge>
            )}
            {product.isFeatured && (
              <Badge className="bg-black text-white text-xs">Featured</Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-red-500 text-white text-xs">
                -{discount}%
              </Badge>
            )}
          </div>

          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
              isWishlisted
                ? 'bg-red-500 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-black hover:bg-gray-800 text-white"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs mb-2 border-gray-300">
              {product.brand}
            </Badge>
          </div>

          <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-xs text-gray-600">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {product.stock <= 5 && product.stock > 0 && (
            <p className="text-xs text-orange-600 mt-1">Only {product.stock} left!</p>
          )}
          {product.stock === 0 && (
            <p className="text-xs text-red-600 mt-1">Out of stock</p>
          )}
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
