
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/products/ProductCard';
import { products, categories, banners } from '@/data/products';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-rotate banners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase().replace(' & ', '-').replace(' ', '-') === selectedCategory
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Slider */}
      <div className="relative h-96 mb-12 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <img
          src={banners[currentBanner].image}
          alt={banners[currentBanner].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {banners[currentBanner].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {banners[currentBanner].subtitle}
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
              <Link to={banners[currentBanner].link}>
                {banners[currentBanner].cta}
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Banner Navigation */}
        <button
          onClick={prevBanner}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Banner Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBanner ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-black mb-6">
            Discover Products
          </h2>
          
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-black rounded-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-64 h-12 border-2 border-gray-200 focus:border-black rounded-lg bg-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-64 h-12 border-2 border-gray-200 focus:border-black rounded-lg bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={`h-12 w-12 rounded-lg ${viewMode === 'grid' ? 'bg-black text-white' : 'border-gray-200 hover:border-black'}`}
                >
                  <Grid className="w-5 h-5" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={`h-12 w-12 rounded-lg ${viewMode === 'list' ? 'bg-black text-white' : 'border-gray-200 hover:border-black'}`}
                >
                  <List className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-semibold text-black">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
            </p>
            <div className="flex gap-2">
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="text-sm px-3 py-1 bg-gray-100 text-gray-800">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </Badge>
              )}
              {searchTerm && (
                <Badge variant="secondary" className="text-sm px-3 py-1 bg-gray-100 text-gray-800">
                  "{searchTerm}"
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-bold text-xl mb-2 hover:text-gray-600 transition-colors text-black">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          {product.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-gray-300">
                          {product.brand}
                        </Badge>
                        {product.isNew && (
                          <Badge className="bg-green-500 text-xs">New</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-2xl text-black">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-lg">★</span>
                            <span className="text-sm text-gray-600">
                              {product.rating} ({product.reviewCount})
                            </span>
                          </div>
                        </div>
                        <Button asChild className="bg-black hover:bg-gray-800 text-white">
                          <Link to={`/products/${product.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">No products found</h3>
            <p className="text-gray-500 text-lg mb-8">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-black hover:bg-gray-800 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
