import { useState, useEffect } from "react";
import { Plus, Search, Edit, Trash2, Eye, Upload, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { products as initialProducts, categories } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const AdminProducts = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    category: "",
    brand: "",
    image: "",
    isFeatured: false,
    isNew: false,
    rating: "4.0",
    reviewCount: "0",
    stock: "",
  });

  useEffect(() => {
    const savedProducts = localStorage.getItem("customProducts");
    if (savedProducts) {
      const customProducts = JSON.parse(savedProducts);
      setProducts([...initialProducts, ...customProducts]);
    }
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.category
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const product = {
      id: Date.now().toString(),
      name: newProduct.name,
      description: newProduct.description,
      price: parseFloat(newProduct.price),
      originalPrice: newProduct.originalPrice
        ? parseFloat(newProduct.originalPrice)
        : undefined,
      category: newProduct.category,
      brand: newProduct.brand,
      image:
        newProduct.image ||
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop",
      isFeatured: newProduct.isFeatured,
      isNew: newProduct.isNew,
      rating: parseFloat(newProduct.rating),
      reviewCount: parseInt(newProduct.reviewCount),
      stock: parseInt(newProduct.stock) || 0,
    };

    const updatedProducts = [...products, product];
    setProducts(updatedProducts);

    // Save custom products to localStorage
    const customProducts = updatedProducts.filter(
      (p) => !initialProducts.find((ip) => ip.id === p.id)
    );
    localStorage.setItem("customProducts", JSON.stringify(customProducts));

    toast({
      title: "Product added successfully",
      description: `${newProduct.name} has been added to your catalog.`,
    });

    setNewProduct({
      name: "",
      description: "",
      price: "",
      originalPrice: "",
      category: "",
      brand: "",
      image: "",
      isFeatured: false,
      isNew: false,
      rating: "4.0",
      reviewCount: "0",
      stock: "",
    });
    setIsAddDialogOpen(false);
  };

  const handleDeleteProduct = (productId, productName) => {
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);

    // Update localStorage
    const customProducts = updatedProducts.filter(
      (p) => !initialProducts.find((ip) => ip.id === p.id)
    );
    localStorage.setItem("customProducts", JSON.stringify(customProducts));

    toast({
      title: "Product deleted",
      description: `${productName} has been removed from your catalog.`,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result;
        setNewProduct((prev) => ({ ...prev, image: imageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Product Management
            </h1>
            <p className="text-gray-600 text-lg">
              Manage your product catalog efficiently
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  Add New Product
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="productName"
                      className="text-sm font-medium"
                    >
                      Product Name *
                    </Label>
                    <Input
                      id="productName"
                      value={newProduct.name}
                      onChange={(e) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Enter product name"
                      className="border-gray-200 focus:border-purple-300"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="productBrand"
                      className="text-sm font-medium"
                    >
                      Brand *
                    </Label>
                    <Input
                      id="productBrand"
                      value={newProduct.brand}
                      onChange={(e) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          brand: e.target.value,
                        }))
                      }
                      placeholder="Enter brand name"
                      className="border-gray-200 focus:border-purple-300"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="productDescription"
                    className="text-sm font-medium"
                  >
                    Description *
                  </Label>
                  <Textarea
                    id="productDescription"
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Enter product description"
                    rows={3}
                    className="border-gray-200 focus:border-purple-300"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label
                      htmlFor="productPrice"
                      className="text-sm font-medium"
                    >
                      Price (₹) *
                    </Label>
                    <Input
                      id="productPrice"
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          price: e.target.value,
                        }))
                      }
                      placeholder="0"
                      className="border-gray-200 focus:border-purple-300"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="originalPrice"
                      className="text-sm font-medium"
                    >
                      Original Price (₹)
                    </Label>
                    <Input
                      id="originalPrice"
                      type="number"
                      value={newProduct.originalPrice}
                      onChange={(e) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          originalPrice: e.target.value,
                        }))
                      }
                      placeholder="0"
                      className="border-gray-200 focus:border-purple-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="stock" className="text-sm font-medium">
                      Stock *
                    </Label>
                    <Input
                      id="stock"
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          stock: e.target.value,
                        }))
                      }
                      placeholder="0"
                      className="border-gray-200 focus:border-purple-300"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="productCategory"
                    className="text-sm font-medium"
                  >
                    Category *
                  </Label>
                  <Select
                    value={newProduct.category}
                    onValueChange={(value) =>
                      setNewProduct((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger className="border-gray-200 focus:border-purple-300">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.icon} {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="productImage" className="text-sm font-medium">
                    Product Image
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="productImage"
                      value={newProduct.image}
                      onChange={(e) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          image: e.target.value,
                        }))
                      }
                      placeholder="Enter image URL or upload image"
                      className="border-gray-200 focus:border-purple-300"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        Or upload image:
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="text-sm"
                      />
                    </div>
                    {newProduct.image && (
                      <img
                        src={newProduct.image}
                        alt="Preview"
                        className="w-24 h-24 object-cover rounded border"
                      />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rating" className="text-sm font-medium">
                      Rating
                    </Label>
                    <Input
                      id="rating"
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      value={newProduct.rating}
                      onChange={(e) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          rating: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-purple-300"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="reviewCount"
                      className="text-sm font-medium"
                    >
                      Review Count
                    </Label>
                    <Input
                      id="reviewCount"
                      type="number"
                      value={newProduct.reviewCount}
                      onChange={(e) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          reviewCount: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-purple-300"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="featured"
                      checked={newProduct.isFeatured}
                      onCheckedChange={(checked) =>
                        setNewProduct((prev) => ({
                          ...prev,
                          isFeatured: !!checked,
                        }))
                      }
                    />
                    <Label htmlFor="featured" className="text-sm font-medium">
                      Featured Product
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="new"
                      checked={newProduct.isNew}
                      onCheckedChange={(checked) =>
                        setNewProduct((prev) => ({ ...prev, isNew: !!checked }))
                      }
                    />
                    <Label htmlFor="new" className="text-sm font-medium">
                      New Product
                    </Label>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={handleAddProduct}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Add Product
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddDialogOpen(false)}
                    className="border-gray-200"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-purple-300"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="border-gray-200 focus:border-purple-300">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-sm text-gray-600 flex items-center">
                Showing {filteredProducts.length} of {products.length} products
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">
              Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600">
                  No products match your current filters.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        Product
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        Category
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        Price
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        Stock
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        Status
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-14 h-14 object-cover rounded-lg shadow-sm"
                            />
                            <div>
                              <p className="font-semibold text-gray-900">
                                {product.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {product.brand}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge
                            variant="secondary"
                            className="bg-purple-100 text-purple-800"
                          >
                            {categories.find((c) => c.id === product.category)
                              ?.name || product.category}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-semibold text-gray-900">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <p className="text-xs text-gray-500 line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </p>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              (product.stock || 0) <= 5
                                ? "bg-red-100 text-red-800"
                                : (product.stock || 0) <= 20
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {product.stock || 0} units
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-1">
                            {product.isFeatured && (
                              <Badge className="bg-blue-100 text-blue-800">
                                Featured
                              </Badge>
                            )}
                            {product.isNew && (
                              <Badge className="bg-green-100 text-green-800">
                                New
                              </Badge>
                            )}
                            {!product.isFeatured && !product.isNew && (
                              <Badge
                                variant="secondary"
                                className="bg-gray-100 text-gray-800"
                              >
                                Regular
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-200 "
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-200 "
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleDeleteProduct(product.id, product.name)
                              }
                              disabled={
                                initialProducts.find(
                                  (p) => p.id === product.id
                                ) !== undefined
                              }
                              className="border-red-200 hover:bg-red-50 text-red-600 disabled:opacity-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminProducts;
