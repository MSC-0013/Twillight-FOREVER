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
  const { orderList, orderDetails } = useSelector(
    (state) => state.shopOrder
  );

  useEffect(() => {
    if (user?.id) {
      dispatch(getAllOrdersByUserId(user.id));
    }
  }, [dispatch, user?.id]);

  useEffect(() => {
    if (orderDetails && orderDetails._id === selectedOrderId) {
      setOpenDetailsDialog(true);
    }
  }, [orderDetails, selectedOrderId]);

  const handleFetchOrderDetails = (orderId) => {
    setSelectedOrderId(orderId);
    dispatch(getOrderDetails(orderId));
  };

  if (!orderList) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>Loading orders...</CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Order Price</TableHead>
              <TableHead>
                <span className="sr-only">Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderList.length > 0 ? (
              orderList.map((orderItem) => {
                if (!orderItem) return null; // skip undefined orders

                const orderDate =
                  typeof orderItem.orderDate === "string"
                    ? orderItem.orderDate.split("T")[0]
                    : "N/A";

                return (
                  <TableRow key={orderItem._id || Math.random()}>
                    <TableCell>{orderItem._id || "N/A"}</TableCell>
                    <TableCell>{orderDate}</TableCell>
                    <TableCell>
                      <Badge
                        className={`py-1 px-3 ${
                          orderItem?.orderStatus === "confirmed"
                            ? "bg-green-500"
                            : orderItem?.orderStatus === "rejected"
                            ? "bg-red-600"
                            : "bg-black"
                        }`}
                      >
                        {orderItem?.orderStatus || "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      ${orderItem?.totalAmount ?? 0}
                    </TableCell>
                    <TableCell>
                      <Dialog
                        open={
                          openDetailsDialog &&
                          selectedOrderId === orderItem?._id
                        }
                        onOpenChange={() => {
                          setOpenDetailsDialog(false);
                          setSelectedOrderId(null);
                          dispatch(resetOrderDetails());
                        }}
                      >
                        <Button
                          onClick={() =>
                            handleFetchOrderDetails(orderItem?._id)
                          }
                        >
                          View Details
                        </Button>
                        <ShoppingOrderDetailsView orderDetails={orderDetails} />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
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
