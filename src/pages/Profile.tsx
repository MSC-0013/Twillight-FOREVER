
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Settings, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { user, logout, updateUser } = useAuth();
  const { toast } = useToast();
  const [orders, setOrders] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  // Load user profile data
  useEffect(() => {
    if (user) {
      const savedProfile = localStorage.getItem(`profile_${user.id}`);
      if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        setUserInfo(profileData);
      } else {
        setUserInfo(prev => ({
          ...prev,
          name: user.name,
          email: user.email
        }));
      }
    }
  }, [user]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = user ? savedOrders.filter((order: any) => order.userId === user.id) : [];
    setOrders(userOrders);
  }, [user]);

  const handleUpdateProfile = () => {
    if (user) {
      // Save profile data to localStorage
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(userInfo));
      
      // Update user context with new name
      updateUser({ name: userInfo.name, email: userInfo.email });
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    }
  };

  const handleCancelOrder = (orderId: string) => {
    const updatedOrders = JSON.parse(localStorage.getItem('orders') || '[]').map((order: any) => 
      order.id === orderId ? { ...order, status: 'cancelled' } : order
    );
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders.filter((order: any) => order.userId === user?.id));
    
    toast({
      title: "Order cancelled",
      description: `Order #${orderId} has been cancelled.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'on-the-way':
        return 'bg-orange-100 text-orange-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const canCancelOrder = (status: string) => {
    return status === 'confirmed' || status === 'processing' || status === 'shipped';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}</h1>
            <p className="text-gray-600">Manage your profile and orders</p>
          </div>
          <Button variant="outline" onClick={logout} className="border-black text-black hover:bg-black hover:text-white">
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white border border-gray-200">
            <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-black data-[state=active]:text-white">
              <User className="w-4 h-4" />
              Profile Information
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2 data-[state=active]:bg-black data-[state=active]:text-white">
              <Package className="w-4 h-4" />
              Order History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="border-gray-200">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-black">
                  <Settings className="w-5 h-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                    <Input
                      id="name"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                    <Input
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(555) 123-4567"
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-gray-700">Address</Label>
                    <Input
                      id="address"
                      value={userInfo.address}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="123 Main Street"
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-gray-700">City</Label>
                    <Input
                      id="city"
                      value={userInfo.city}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, city: e.target.value }))}
                      placeholder="New York"
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-gray-700">State</Label>
                    <Input
                      id="state"
                      value={userInfo.state}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, state: e.target.value }))}
                      placeholder="NY"
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-gray-700">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={userInfo.zipCode}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, zipCode: e.target.value }))}
                      placeholder="10001"
                      className="border-gray-300 focus:border-black"
                    />
                  </div>
                </div>

                <Button onClick={handleUpdateProfile} className="bg-black hover:bg-gray-800 text-white">
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders yet</h3>
                    <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
                    <Button asChild>
                      <Link to="/products">Start Shopping</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold">Order #{order.id}</h3>
                            <p className="text-sm text-gray-600">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                            <span className="font-bold">${order.totalAmount.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 mb-3">
                          {order.items.slice(0, 3).map((item: any) => (
                            <img
                              key={item.id}
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                          ))}
                          {order.items.length > 3 && (
                            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-600">
                              +{order.items.length - 3}
                            </div>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                          </span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/orders/${order.id}`}>
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </Link>
                            </Button>
                            {canCancelOrder(order.status) && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleCancelOrder(order.id)}
                                className="text-red-600 border-red-200 hover:bg-red-50"
                              >
                                <X className="w-4 h-4 mr-2" />
                                Cancel Order
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
