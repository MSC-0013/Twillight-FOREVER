
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    toast.success('Added to cart!');
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast.error('Please login to add items to wishlist');
      return;
    }

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      });
      toast.success('Added to wishlist!');
    }
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-purple-200 bg-white overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </Link>
          
          {/* Overlay with quick actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full bg-white/90 hover:bg-white shadow-lg"
              onClick={handleWishlistToggle}
            >
              <Heart
                className={`w-4 h-4 ${
                  isAuthenticated && isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                }`}
              />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full bg-white/90 hover:bg-white shadow-lg"
              asChild
            >
              <Link to={`/products/${product.id}`}>
                <Eye className="w-4 h-4 text-gray-600" />
              </Link>
            </Button>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
                New
              </Badge>
            )}
            {product.discount && (
              <Badge variant="destructive" className="shadow-lg">
                -{product.discount}%
              </Badge>
            )}
            {product.isFeatured && (
              <Badge className="bg-purple-500 hover:bg-purple-600 text-white shadow-lg">
                Featured
              </Badge>
            )}
          </div>
        </div>
        
        <div className="p-6">
          {/* Rating and Reviews */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviewCount})</span>
          </div>
          
          {/* Brand and Category */}
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs font-medium">
              {product.brand}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </div>
          
          {/* Product Name */}
          <Link to={`/products/${product.id}`}>
            <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors leading-tight">
              {product.name}
            </h3>
          </Link>
          
          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-purple-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {/* Stock Status */}
          <div className="mb-4">
            {product.stock > 10 ? (
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                In Stock
              </Badge>
            ) : product.stock > 0 ? (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                Only {product.stock} left!
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                Out of Stock
              </Badge>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105" 
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
