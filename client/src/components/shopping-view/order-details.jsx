import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

function ShoppingOrderDetailsView({ orderDetails }) {
  const { user } = useSelector((state) => state.auth);

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500";
      case "rejected":
        return "bg-red-600";
      default:
        return "bg-gray-800";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const dateObj = new Date(dateString);
    return isNaN(dateObj) ? "N/A" : dateObj.toLocaleDateString();
  };

  return (
    <DialogContent className="sm:max-w-[600px] p-6">
      <div className="grid gap-6">
        {/* Basic Order Info */}
        <div className="grid gap-3">
          {[
            { label: "Order ID", value: orderDetails?._id ?? "-" },
            { label: "Order Date", value: formatDate(orderDetails?.orderDate) },
            {
              label: "Order Price",
              value: `₹${orderDetails?.totalAmount ?? 0}`,
            },
            { label: "Payment Method", value: orderDetails?.paymentMethod ?? "-" },
            { label: "Payment Status", value: orderDetails?.paymentStatus ?? "-" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="font-medium">{item.label}</p>
              <Label>{item.value}</Label>
            </div>
          ))}

          {/* Order Status with Badge */}
          <div className="flex items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>
              <Badge
                className={`py-1 px-3 ${getStatusBadgeColor(
                  orderDetails?.orderStatus
                )}`}
              >
                {orderDetails?.orderStatus ?? "-"}
              </Badge>
            </Label>
          </div>
        </div>

        <Separator />

        {/* Cart Items */}
        <div className="grid gap-4">
          <div className="font-medium">Order Items</div>
          <ul className="grid gap-2">
            {orderDetails?.cartItems?.length ? (
              orderDetails.cartItems.map((item, idx) => (
                <li key={idx} className="flex justify-between border rounded p-2">
                  <span className="font-semibold">{item.title}</span>
                  <span>Qty: {item.quantity}</span>
                  <span>₹{item.price}</span>
                </li>
              ))
            ) : (
              <li>No items found</li>
            )}
          </ul>
        </div>

        {/* Shipping Info */}
        <div className="grid gap-2">
          <div className="font-medium">Shipping Info</div>
          <div className="grid gap-0.5 text-muted-foreground">
            <span>{user?.userName ?? "-"}</span>
            <span>{orderDetails?.addressInfo?.address ?? "-"}</span>
            <span>{orderDetails?.addressInfo?.city ?? "-"}</span>
            <span>{orderDetails?.addressInfo?.pincode ?? "-"}</span>
            <span>{orderDetails?.addressInfo?.phone ?? "-"}</span>
            <span>{orderDetails?.addressInfo?.notes ?? "-"}</span>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default ShoppingOrderDetailsView;
