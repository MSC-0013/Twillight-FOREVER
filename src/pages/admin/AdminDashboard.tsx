
import { useState, useEffect } from 'react';
import { Users, Package, ShoppingBag, DollarSign, TrendingUp, TrendingDown, Settings, Edit, Eye, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const { toast } = useToast();
  const [orders, setOrders] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: products.length,
    totalUsers: 2
  });
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
    
    const totalRevenue = savedOrders.reduce((sum: number, order: any) => sum + order.totalAmount, 0);
    setStats(prev => ({
      ...prev,
      totalOrders: savedOrders.length,
      totalRevenue
    }));
  }, []);

  const recentOrders = orders.slice(-5).reverse();

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    
    toast({
      title: "Order Updated",
      description: `Order #${orderId} status changed to ${newStatus}`,
    });
  };

  const statCards = [
    {
      title: "Total Revenue",
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      icon: <DollarSign className="w-6 h-6" />,
      change: "+12.5%",
      trend: "up",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: <ShoppingBag className="w-6 h-6" />,
      change: "+8.2%",
      trend: "up",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Products",
      value: stats.totalProducts,
      icon: <Package className="w-6 h-6" />,
      change: "+5.1%",
      trend: "up",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Users",
      value: stats.totalUsers,
      icon: <Users className="w-6 h-6" />,
      change: "+15.3%",
      trend: "up",
      color: "from-orange-500 to-red-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                FOREVER Admin Hub
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Comprehensive dashboard for managing your e-commerce empire with advanced analytics and controls.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
                <Link to="/admin/products">
                  <Package className="w-4 h-4 mr-2" />
                  Manage Products
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all">
                <Link to="/admin/orders">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Orders
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {statCards.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center space-x-1">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-sm font-medium ${
                        stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-gray-500 text-sm">vs last month</span>
                    </div>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                </div>
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">
          {/* Enhanced Recent Orders */}
          <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2 text-blue-600" />
                  Recent Orders
                </span>
                <Button asChild variant="outline" size="sm" className="hover:bg-blue-50">
                  <Link to="/admin/orders">View All Orders</Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {recentOrders.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
                  <p className="text-gray-500">Orders will appear here once customers start purchasing</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-gray-900">Order #{order.id}</p>
                          <p className="font-bold text-gray-900">₹{order.totalAmount.toLocaleString()}</p>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {order.shippingInfo.firstName} {order.shippingInfo.lastName}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500">
                            {new Date(order.createdAt).toLocaleDateString()}
                          </p>
                          <div className="flex items-center space-x-2">
                            <Select
                              value={order.status}
                              onValueChange={(value) => updateOrderStatus(order.id, value)}
                            >
                              <SelectTrigger className={`w-32 h-8 text-xs ${getStatusColor(order.status)}`}>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="processing">Processing</SelectItem>
                                <SelectItem value="shipped">Shipped</SelectItem>
                                <SelectItem value="delivered">Delivered</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setSelectedOrder(order);
                                setIsOrderDialogOpen(true);
                              }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Enhanced Top Products */}
          <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-purple-600" />
                  Featured Products
                </span>
                <Button asChild variant="outline" size="sm" className="hover:bg-purple-50">
                  <Link to="/admin/products">Manage Products</Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {featuredProducts.map((product, index) => (
                  <div key={product.id} className="flex items-center gap-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-900 truncate">{product.name}</p>
                      <p className="text-xs text-gray-600">{product.category} • {product.brand}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-sm">₹{product.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{product.stock} in stock</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Quick Actions */}
        <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-gray-600" />
              Quick Actions & Management
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/admin/products" className="group">
                <div className="p-6 border-2 border-gray-200 rounded-2xl text-center hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 hover:border-purple-300 cursor-pointer transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <Package className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">Manage Products</h3>
                  <p className="text-sm text-gray-600">Add, edit, or remove products from your catalog</p>
                </div>
              </Link>
              <Link to="/admin/orders" className="group">
                <div className="p-6 border-2 border-gray-200 rounded-2xl text-center hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 hover:border-green-300 cursor-pointer transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <ShoppingBag className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">Process Orders</h3>
                  <p className="text-sm text-gray-600">Review and update order statuses</p>
                </div>
              </Link>
              <Link to="/admin/users" className="group">
                <div className="p-6 border-2 border-gray-200 rounded-2xl text-center hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-blue-300 cursor-pointer transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">Manage Users</h3>
                  <p className="text-sm text-gray-600">View and manage customer accounts</p>
                </div>
              </Link>
              <div className="group">
                <div className="p-6 border-2 border-gray-200 rounded-2xl text-center hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 hover:border-orange-300 cursor-pointer transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <Settings className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">Settings</h3>
                  <p className="text-sm text-gray-600">Configure store settings and preferences</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Details Dialog */}
        <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Order Details #{selectedOrder?.id}</DialogTitle>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Customer</Label>
                    <p className="text-lg font-semibold">{selectedOrder.shippingInfo.firstName} {selectedOrder.shippingInfo.lastName}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Total Amount</Label>
                    <p className="text-lg font-semibold">₹{selectedOrder.totalAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Status</Label>
                    <Select
                      value={selectedOrder.status}
                      onValueChange={(value) => updateOrderStatus(selectedOrder.id, value)}
                    >
                      <SelectTrigger className={`${getStatusColor(selectedOrder.status)}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Order Date</Label>
                    <p className="text-lg">{new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Shipping Address</Label>
                  <div className="bg-gray-50 p-4 rounded-lg mt-2">
                    <p>{selectedOrder.shippingInfo.street}</p>
                    <p>{selectedOrder.shippingInfo.city}, {selectedOrder.shippingInfo.state} {selectedOrder.shippingInfo.zipCode}</p>
                    <p>{selectedOrder.shippingInfo.country}</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminDashboard;