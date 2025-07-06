import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  MapPin,
  User,
  Phone,
  Mail,
  Lock,
  Banknote,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

  useEffect(() => {
    if (user) {
      const savedProfile = localStorage.getItem(`profile_${user.email}`);
      if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        const nameParts = profileData.name.split(" ");
        setShippingInfo({
          firstName: nameParts[0] || "",
          lastName: nameParts.slice(1).join(" ") || "",
          email: profileData.email || "",
          phone: profileData.phone || "",
          address: profileData.address || "",
          city: profileData.city || "",
          state: profileData.state || "",
          zipCode: profileData.zipCode || "",
          country: "India",
        });
      }
    }
  }, [user]);

  const handleInputChange = (section, field, value) => {
    if (section === "shipping") {
      setShippingInfo((prev) => ({ ...prev, [field]: value }));
    } else {
      setPaymentInfo((prev) => ({ ...prev, [field]: value }));
    }
  };

  const validateForm = () => {
    const requiredShippingFields = [
      "firstName",
      "lastName",
      "email",
      "address",
      "city",
      "state",
      "zipCode",
    ];

    for (const field of requiredShippingFields) {
      if (!shippingInfo[field]) {
        toast({
          title: "Missing Information",
          description: `Please fill in your ${field
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()}.`,
          variant: "destructive",
        });
        return false;
      }
    }

    if (paymentMethod === "card") {
      const requiredPaymentFields = [
        "cardNumber",
        "expiryDate",
        "cvv",
        "cardholderName",
      ];
      for (const field of requiredPaymentFields) {
        if (!paymentInfo[field]) {
          toast({
            title: "Missing Payment Information",
            description: `Please fill in your ${field
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()}.`,
            variant: "destructive",
          });
          return false;
        }
      }
    }

    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const orderId = Date.now().toString();

    const order = {
      id: orderId,
      userId: user?.email,
      items,
      shippingInfo,
      paymentMethod,
      totalAmount: totalPrice * 1.08,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    clearCart();
    setIsLoading(false);

    toast({
      title: "Order placed successfully!",
      description: `Your order #${orderId} has been confirmed.`,
    });

    navigate(`/order-confirmation/${orderId}`);
  };

  const tax = totalPrice * 0.08;
  const total = totalPrice + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={shippingInfo.firstName}
                      onChange={(e) =>
                        handleInputChange(
                          "shipping",
                          "firstName",
                          e.target.value
                        )
                      }
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={shippingInfo.lastName}
                      onChange={(e) =>
                        handleInputChange(
                          "shipping",
                          "lastName",
                          e.target.value
                        )
                      }
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) =>
                        handleInputChange("shipping", "email", e.target.value)
                      }
                      placeholder="@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={shippingInfo.phone}
                      onChange={(e) =>
                        handleInputChange("shipping", "phone", e.target.value)
                      }
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) =>
                      handleInputChange("shipping", "address", e.target.value)
                    }
                    placeholder=""
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) =>
                        handleInputChange("shipping", "city", e.target.value)
                      }
                      placeholder=""
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={shippingInfo.state}
                      onChange={(e) =>
                        handleInputChange("shipping", "state", e.target.value)
                      }
                      placeholder=""
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={(e) =>
                        handleInputChange("shipping", "zipCode", e.target.value)
                      }
                      placeholder="111111"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  {/* Credit/Debit Card */}
                  <Label
                    htmlFor="card"
                    className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer w-full"
                  >
                    <RadioGroupItem value="card" id="card" />
                    <CreditCard className="w-5 h-5" />
                    <span>Credit/Debit Card</span>
                  </Label>

                  {/* UPI Payment */}
                  <Label
                    htmlFor="upi"
                    className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer w-full"
                  >
                    <RadioGroupItem value="upi" id="upi" />
                    <Smartphone className="w-5 h-5" />
                    <span>UPI Payment</span>
                  </Label>

                  {/* Cash on Delivery */}
                  <Label
                    htmlFor="cod"
                    className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer w-full"
                  >
                    <RadioGroupItem value="cod" id="cod" />
                    <Banknote className="w-5 h-5" />
                    <span>Cash on Delivery</span>
                  </Label>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-gray-600 text-xs">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="font-medium">
                        ₹{Math.round(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <Separator />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isLoading}
                  className={`
    relative w-full overflow-hidden text-white py-3 px-4 rounded-md
    bg-black border border-white shadow-md group transition-all duration-500
    ${isLoading ? "cursor-wait" : "hover:scale-[1.02] active:translate-x-1"}
  `}
                >
                  {/* Swipe Hover Effect Background */}
                  <span
                    className={`
      absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-transparent
      opacity-0 group-hover:opacity-100 transition-all duration-500
      transform -translate-x-full group-hover:translate-x-0
    `}
                  ></span>

                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <Lock className="w-4 h-4 animate-spin text-white" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-white" />
                        <span>Place Order</span>
                      </>
                    )}
                  </span>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
