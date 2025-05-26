
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const Home = () => {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-white">FOR</span>
              <span className="text-gray-300">EVER</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover timeless elegance in our curated collection of premium products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
                <Link to="/products">
                  Explore Collection <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose FOREVER</h2>
            <p className="text-gray-600 text-lg">Excellence in every detail</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Free Shipping</h3>
              <p className="text-gray-600">Complimentary shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Secure Payment</h3>
              <p className="text-gray-600">Bank-level security for all transactions</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer service team</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <RotateCcw className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Easy Returns</h3>
              <p className="text-gray-600">Hassle-free 30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Discover our curated collections</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-black">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-black group-hover:text-gray-600 transition-colors">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">Featured Collection</h2>
              <p className="text-gray-600 text-lg">Handpicked essentials for the modern lifestyle</p>
            </div>
            <Button variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white">
              <Link to="/products">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">New Arrivals</h2>
              <p className="text-gray-600 text-lg">Fresh additions to our collection</p>
            </div>
            <Button variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white">
              <Link to="/products?sort=newest">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the FOREVER Community</h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Experience premium quality and timeless style with thousands of satisfied customers
          </p>
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/register">
              Create Account <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
