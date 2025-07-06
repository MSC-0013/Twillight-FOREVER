import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/products/ProductCard";
import { products, categories, banners } from "./../data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
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
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category
            .toLowerCase()
            .replace(" & ", "-")
            .replace(" ", "-") === selectedCategory
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
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
      {/* Enhanced Banner Slider - Perfect alignment with navbar */}
      <div className="relative h-72 sm:h-80 md:h-96 lg:h-[420px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />
        <img
          src={banners[currentBanner].image}
          alt={banners[currentBanner].title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in leading-tight">
              {banners[currentBanner].title}
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 text-gray-200 animate-fade-in max-w-3xl mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              {banners[currentBanner].subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 animate-fade-in shadow-xl hover:shadow-2xl transition-all"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to={banners[currentBanner].link}>
                {banners[currentBanner].cta}
              </Link>
            </Button>
          </div>
        </div>

        {/* Enhanced Banner Navigation */}
        <button
          onClick={prevBanner}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        </button>

        {/* Enhanced Banner Dots */}
        <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentBanner
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 text-center md:text-left">
            Discover Premium Products
          </h2>

          {/* Enhanced Search and Filters */}
          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-4 mb-8">
            <div className="lg:col-span-5 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-base border-2 border-gray-200 focus:border-black rounded-xl shadow-sm hover:shadow-md transition-all"
              />
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-black rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-xl rounded-xl z-50">
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-black rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-xl rounded-xl z-50">
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <div className="sm:col-span-2 lg:col-span-2 flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className={`h-12 flex-1 rounded-xl transition-all ${
                    viewMode === "grid"
                      ? "bg-black text-white shadow-lg"
                      : "border-gray-200 hover:border-black hover:shadow-md"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className={`h-12 flex-1 rounded-xl transition-all ${
                    viewMode === "list"
                      ? "bg-black text-white shadow-lg"
                      : "border-gray-200 hover:border-black hover:shadow-md"
                  }`}
                >
                  <List className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Results Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-base md:text-lg">
              Showing{" "}
              <span className="font-semibold text-black">
                {filteredProducts.length}
              </span>{" "}
              of <span className="font-semibold">{products.length}</span>{" "}
              products
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "all" && (
                <Badge
                  variant="secondary"
                  className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                >
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </Badge>
              )}
              {searchTerm && (
                <Badge
                  variant="secondary"
                  className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full"
                >
                  "{searchTerm}"
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Products Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-xl"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="w-full md:w-40 h-48 md:h-40 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl shadow-md"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-bold text-lg md:text-xl mb-2 hover:text-gray-600 transition-colors text-black line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-800 rounded-full"
                        >
                          {product.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs border-gray-300 rounded-full"
                        >
                          {product.brand}
                        </Badge>
                        {product.isNew && (
                          <Badge className="bg-green-500 text-xs rounded-full">
                            New
                          </Badge>
                        )}
                        {product.isFeatured && (
                          <Badge className="bg-blue-500 text-xs rounded-full">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-xl md:text-2xl text-black">
                              ₹{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-base md:text-lg text-gray-500 line-through">
                                ₹{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-400 text-lg">★</span>
                              <span className="text-sm text-gray-600">
                                {product.rating} ({product.reviewCount})
                              </span>
                            </div>
                            {product.stock <= 5 && product.stock > 0 && (
                              <span className="text-xs text-orange-600 font-medium">
                                Only {product.stock} left!
                              </span>
                            )}
                          </div>
                        </div>
                        <Button
                          asChild
                          className="bg-black hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
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

        {/* Enhanced No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 md:py-24">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 md:w-16 md:h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              No products found
            </h3>
            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're
              looking for
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
