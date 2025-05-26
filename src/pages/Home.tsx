
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, RotateCcw, Zap, Award, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { products, categories, landingBanners } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { useEffect, useState } from 'react';

const Home = () => {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);
  const newProducts = products.filter(p => p.isNew).slice(0, 8);
  const bestSellers = products.sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8);
  
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % landingBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slideshow Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          {landingBanners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentBanner ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${banner.image})`
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-scale-in">
              <span className="text-white">FOR</span>
              <span className="text-gray-300">EVER</span>
            </h1>
            <p className="text-xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              {landingBanners[currentBanner]?.subtitle || "Discover timeless elegance in our curated collection"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg hover-scale">
                <Link to="/products">
                  <Zap className="mr-2 w-5 h-5" />
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg hover-scale">
                Explore Collection
              </Button>
            </div>
          </div>
        </div>

        {/* Banner Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {landingBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentBanner((prev) => (prev - 1 + landingBanners.length) % landingBanners.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-20"
        >
          <ArrowRight className="w-6 h-6 transform rotate-180" />
        </button>
        <button
          onClick={() => setCurrentBanner((prev) => (prev + 1) % landingBanners.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-20"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Products Sold</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose FOREVER</h2>
            <p className="text-gray-600 text-lg">Excellence in every detail</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'Free delivery on orders over ₹500', delay: '0s' },
              { icon: Shield, title: 'Secure Payment', desc: 'Bank-level security for all transactions', delay: '0.1s' },
              { icon: Headphones, title: '24/7 Support', desc: 'Dedicated customer service team', delay: '0.2s' },
              { icon: RotateCcw, title: 'Easy Returns', desc: 'Hassle-free 30-day return policy', delay: '0.3s' },
              { icon: Award, title: 'Premium Quality', desc: 'Only the finest products make our catalog', delay: '0.4s' },
              { icon: Clock, title: 'Fast Delivery', desc: 'Same-day delivery in major cities', delay: '0.5s' },
              { icon: Users, title: 'Expert Team', desc: 'Curated by product specialists', delay: '0.6s' },
              { icon: Zap, title: 'Lightning Deals', desc: 'Exclusive flash sales for members', delay: '0.7s' }
            ].map((feature, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale" style={{animationDelay: feature.delay}}>
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-gray-800 transition-colors">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Discover our curated collections</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group animate-fade-in hover-scale"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-black h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
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

      {/* Featured Products Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">Featured Collection</h2>
              <p className="text-gray-600 text-lg">Handpicked essentials for the modern lifestyle</p>
            </div>
            <Button variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white hover-scale">
              <Link to="/products">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <Carousel className="w-full animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover-scale" />
            <CarouselNext className="hover-scale" />
          </Carousel>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">Best Sellers</h2>
              <p className="text-gray-600 text-lg">Most loved products by our customers</p>
            </div>
            <Button variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white hover-scale">
              <Link to="/products">
                Shop Best Sellers <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <div key={product.id} className="animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">New Arrivals</h2>
              <p className="text-gray-600 text-lg">Fresh additions to our collection</p>
            </div>
            <Button variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white hover-scale">
              <Link to="/products?sort=newest">
                View All New <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <Carousel className="w-full animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {newProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover-scale" />
            <CarouselNext className="hover-scale" />
          </Carousel>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
          <p className="text-xl mb-10 text-purple-100">
            Get exclusive deals, new arrivals, and insider updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 hover-scale">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Join the FOREVER Community</h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Experience premium quality and timeless style with over 1 million satisfied customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg hover-scale">
              <Link to="/register">
                Create Account <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg hover-scale">
              <Link to="/products">
                Start Shopping
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
