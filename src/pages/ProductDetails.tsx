
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, ArrowLeft, Truck, Shield, RotateCcw, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Product not found</h1>
          <Link to="/products">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isWishlisted = isAuthenticated && isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to cart.",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to purchase items.",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }

    // Add to cart and navigate to checkout
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/checkout');
  };

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to wishlist.",
        variant: "destructive"
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

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/products" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-purple-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="text-sm font-medium px-3 py-1">
                  {product.brand}
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {product.category}
                </Badge>
                {product.isFeatured && <Badge className="bg-purple-500 text-sm px-3 py-1">Featured</Badge>}
                {product.isNew && <Badge className="bg-green-500 text-sm px-3 py-1">New</Badge>}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg text-gray-600 font-medium">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>
            </div>

            {/* Price */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-purple-600">${product.price}</span>
                {product.originalPrice && (
                  <div className="flex flex-col">
                    <span className="text-2xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.stock > 10 ? (
                  <Badge className="bg-green-100 text-green-700 text-sm px-3 py-2">
                    ✓ In Stock - Ready to ship
                  </Badge>
                ) : product.stock > 0 ? (
                  <Badge className="bg-yellow-100 text-yellow-700 text-sm px-3 py-2">
                    ⚠ Only {product.stock} left in stock!
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-700 text-sm px-3 py-2">
                    ✗ Out of Stock
                  </Badge>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-8">
                <label className="text-lg font-medium text-gray-900">Quantity:</label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors font-bold text-lg"
                    disabled={product.stock === 0}
                  >
                    -
                  </button>
                  <span className="px-6 py-3 border-x-2 border-gray-200 font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors font-bold text-lg"
                    disabled={product.stock === 0}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button 
                    onClick={handleBuyNow} 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 text-lg rounded-xl transition-all transform hover:scale-105"
                    disabled={product.stock === 0}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Buy Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleWishlistToggle}
                    className={`px-4 py-4 rounded-xl border-2 transition-all ${
                      isWishlisted ? 'text-red-600 border-red-200 bg-red-50' : 'border-gray-200 hover:border-purple-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                </div>
                
                <Button 
                  onClick={handleAddToCart} 
                  variant="outline"
                  className="w-full py-4 text-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 rounded-xl transition-all"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">2-year warranty included</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600 font-medium">{key}:</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <div className="aspect-square rounded-t-2xl overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-2xl font-bold text-purple-600">${relatedProduct.price}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
