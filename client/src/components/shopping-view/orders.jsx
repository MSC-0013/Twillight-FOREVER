import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ShoppingOrderDetailsView from "./order-details";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersByUserId,
  getOrderDetails,
  resetOrderDetails,
} from "@/store/shop/order-slice";
import { Badge } from "../ui/badge";

function AdminOrdersView() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { orderList = [], orderDetails } = useSelector(
    (state) => state.shopOrder
  );

  // Fetch all orders for this user
  useEffect(() => {
    if (user?.id) {
      dispatch(getAllOrdersByUserId(user.id));
    }
  }, [dispatch, user?.id]);

  // Open dialog when matching details are available
  useEffect(() => {
    if (orderDetails?._id && orderDetails._id === selectedOrderId) {
      setOpenDetailsDialog(true);
    }
  }, [orderDetails, selectedOrderId]);

  const handleFetchOrderDetails = (orderId) => {
    setSelectedOrderId(orderId);
    dispatch(getOrderDetails(orderId));
  };

  const getStatusBadgeColor = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "bg-green-500";
      case "processing":
        return "bg-blue-500";
      case "shipped":
        return "bg-yellow-500";
      case "delivered":
        return "bg-emerald-600";
      case "rejected":
        return "bg-red-600";
      default:
        return "bg-gray-800";
    }
  };

  const formatDate = (dateString) => {
    try {
      if (!dateString) return "N/A";
      if (typeof dateString === "string" && dateString.includes("T")) {
        return dateString.split("T")[0];
      }
      const d = new Date(dateString);
      return isNaN(d) ? "N/A" : d.toLocaleDateString();
    } catch {
      return "N/A";
    }
  };

  if (!orderList) {
    return (
      <Card className="shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>Loading orders...</CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>
                <span className="sr-only">Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderList.length > 0 ? (
              orderList.map((orderItem) => {
                if (!orderItem) return null;

                // Normalize old + new schema
                const orderId = orderItem._id ?? "N/A";
                const orderDate =
                  orderItem.orderDate ||
                  orderItem.createdAt ||
                  orderItem.updatedAt ||
                  "";
                const orderStatus =
                  orderItem.orderStatus ||
                  orderItem.status ||
                  "Pending";
                const totalAmount =
                  typeof orderItem.totalAmount === "number"
                    ? orderItem.totalAmount
                    : 0;

                return (
                  <TableRow key={orderId} className="hover:bg-gray-50">
                    <TableCell className="font-mono text-sm">
                      {orderId}
                    </TableCell>
                    <TableCell>{formatDate(orderDate)}</TableCell>
                    <TableCell>
                      <Badge
                        className={`py-1 px-3 ${getStatusBadgeColor(
                          orderStatus
                        )}`}
                      >
                        {orderStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>₹{totalAmount}</TableCell>
                    <TableCell>
                      <Dialog
                        open={
                          openDetailsDialog && selectedOrderId === orderId
                        }
                        onOpenChange={() => {
                          setOpenDetailsDialog(false);
                          setSelectedOrderId(null);
                          dispatch(resetOrderDetails());
                        }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleFetchOrderDetails(orderId)}
                        >
                          View Details
                        </Button>

                        {selectedOrderId === orderId &&
                          orderDetails &&
                          orderDetails._id === orderId && (
                            <ShoppingOrderDetailsView
                              orderDetails={{
                                ...orderDetails,
                                // handle old vs new schema
                                products: Array.isArray(orderDetails?.products)
                                  ? orderDetails.products
                                  : Array.isArray(orderDetails?.items)
                                  ? orderDetails.items
                                  : Array.isArray(orderDetails?.cartItems)
                                  ? orderDetails.cartItems
                                  : [],
                              }}
                            />
                          )}
                      </Dialog>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-6 text-gray-500"
                >
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AdminOrdersView;
