
import { useState, useEffect } from 'react';
import { Search, Eye, Package, Truck, CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const AdminOrders = () => {
  const { toast } = useToast();
  const [orders, setOrders] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.includes(searchTerm) ||
      `${order.shippingInfo.firstName} ${order.shippingInfo.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.shippingInfo.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus, updatedAt: new Date().toISOString() } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    
    toast({
      title: "Order status updated",
      description: `Order #${orderId} status changed to ${newStatus.replace('-', ' ')}.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'on-the-way':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'processing':
        return <Clock className="w-4 h-4" />;
      case 'shipped':
        return <Package className="w-4 h-4" />;
      case 'on-the-way':
        return <Truck className="w-4 h-4" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const orderStats = {
    total: orders.length,
    confirmed: orders.filter(o => o.status === 'confirmed').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    onTheWay: orders.filter(o => o.status === 'on-the-way').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  const getStatusOptions = (currentStatus: string) => {
    const statusFlow = ['confirmed', 'processing', 'shipped', 'on-the-way', 'delivered'];
    const currentIndex = statusFlow.indexOf(currentStatus);
    
    if (currentStatus === 'cancelled') {
      return ['cancelled'];
    }
    
    return statusFlow.slice(currentIndex);
  };

  const getNextStatus = (currentStatus: string) => {
    const statusFlow = ['confirmed', 'processing', 'shipped', 'on-the-way', 'delivered'];
    const currentIndex = statusFlow.indexOf(currentStatus);
    
    if (currentIndex >= 0 && currentIndex < statusFlow.length - 1) {
      return statusFlow[currentIndex + 1];
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Order Management
          </h1>
          <p className="text-gray-600 text-lg">View and manage customer orders efficiently</p>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-gray-900">{orderStats.total}</p>
              <p className="text-sm text-gray-600">Total</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{orderStats.confirmed}</p>
              <p className="text-sm text-gray-600">Confirmed</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-yellow-600">{orderStats.processing}</p>
              <p className="text-sm text-gray-600">Processing</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-purple-600">{orderStats.shipped}</p>
              <p className="text-sm text-gray-600">Shipped</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-orange-600">{orderStats.onTheWay}</p>
              <p className="text-sm text-gray-600">On the Way</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{orderStats.delivered}</p>
              <p className="text-sm text-gray-600">Delivered</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-red-600">{orderStats.cancelled}</p>
              <p className="text-sm text-gray-600">Cancelled</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-purple-300"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="border-gray-200 focus:border-purple-300">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="on-the-way">On the Way</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <div className="text-sm text-gray-600 flex items-center">
                Showing {filteredOrders.length} of {orders.length} orders
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredOrders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-600">No orders match your current filters.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Order ID</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Customer</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Date</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Total</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => {
                      const nextStatus = getNextStatus(order.status);
                      return (
                        <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-4">
                            <span className="font-mono text-sm font-semibold text-purple-600">#{order.id}</span>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-semibold text-gray-900">
                                {order.shippingInfo.firstName} {order.shippingInfo.lastName}
                              </p>
                              <p className="text-sm text-gray-600">{order.shippingInfo.email}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm text-gray-600">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="font-bold text-gray-900">₹{order.totalAmount.toLocaleString()}</span>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={`${getStatusColor(order.status)} border`}>
                              {getStatusIcon(order.status)}
                              <span className="ml-1 capitalize">{order.status.replace('-', ' ')}</span>
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setSelectedOrder(order)}
                                    className="border-gray-200 hover:bg-gray-50"
                                  >
                                    <Eye className="w-4 h-4 mr-1" />
                                    View
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="text-xl font-bold">
                                      Order Details - #{selectedOrder?.id}
                                    </DialogTitle>
                                  </DialogHeader>
                                  {selectedOrder && (
                                    <div className="space-y-6">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                          <h4 className="font-semibold mb-2 text-gray-900">Customer Information</h4>
                                          <p className="text-gray-700">{selectedOrder.shippingInfo.firstName} {selectedOrder.shippingInfo.lastName}</p>
                                          <p className="text-gray-600">{selectedOrder.shippingInfo.email}</p>
                                          <p className="text-gray-600">{selectedOrder.shippingInfo.phone}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                          <h4 className="font-semibold mb-2 text-gray-900">Shipping Address</h4>
                                          <p className="text-gray-700">{selectedOrder.shippingInfo.address}</p>
                                          <p className="text-gray-600">{selectedOrder.shippingInfo.city}, {selectedOrder.shippingInfo.state} {selectedOrder.shippingInfo.zipCode}</p>
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <h4 className="font-semibold mb-3 text-gray-900">Order Items</h4>
                                        <div className="space-y-3">
                                          {selectedOrder.items.map((item: any) => (
                                            <div key={item.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg bg-white">
                                              <div className="flex items-center gap-3">
                                                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                                <div>
                                                  <p className="font-medium text-gray-900">{item.name}</p>
                                                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                                </div>
                                              </div>
                                              <span className="font-semibold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      <div className="border-t pt-4 bg-gray-50 p-4 rounded-lg">
                                        <div className="flex justify-between text-xl font-bold">
                                          <span className="text-gray-900">Total Amount:</span>
                                          <span className="text-gray-900">₹{selectedOrder.totalAmount.toLocaleString()}</span>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              
                              {nextStatus && order.status !== 'delivered' && order.status !== 'cancelled' && (
                                <Button
                                  size="sm"
                                  onClick={() => updateOrderStatus(order.id, nextStatus)}
                                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                                >
                                  <ArrowRight className="w-4 h-4 mr-1" />
                                  {nextStatus.replace('-', ' ')}
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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

export default AdminOrders;