const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

// Create order and mark as paid directly
const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      totalAmount,
      cartId,
    } = req.body;

    const newlyCreatedOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus: "confirmed",      // directly confirmed
      paymentMethod: "direct",       // no PayPal
      paymentStatus: "success",      // payment success
      totalAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
    });

    await newlyCreatedOrder.save();

    // Reduce stock for each product
    for (let item of cartItems) {
      const product = await Product.findById(item.productId);
      if (product) {
        product.totalStock -= item.quantity;
        await product.save();
      }
    }

    // Delete user's cart
    if (cartId) {
      await Cart.findByIdAndDelete(cartId);
    }

    res.status(201).json({
      success: true,
      orderId: newlyCreatedOrder._id,
      message: "Order confirmed successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred while creating the order",
    });
  }
};

// Get all orders by user
const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    // Format orders
    const formattedOrders = orders.map(order => ({
      ...order.toObject(),
      orderDate: order.orderDate ? order.orderDate.toISOString() : null,
      orderUpdateDate: order.orderUpdateDate ? order.orderUpdateDate.toISOString() : null,
    }));

    res.status(200).json({ success: true, data: formattedOrders });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Some error occurred!" });
  }
};

// Get order details
const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found!" });
    }

    const formattedOrder = {
      ...order.toObject(),
      orderDate: order.orderDate ? order.orderDate.toISOString() : null,
      orderUpdateDate: order.orderUpdateDate ? order.orderUpdateDate.toISOString() : null,
    };

    res.status(200).json({ success: true, data: formattedOrder });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Some error occurred!" });
  }
};

module.exports = {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
};
