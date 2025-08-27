const Order = require("../../models/Order");

const getAllOrdersOfAllUsers = async (req, res) => {
  try {
    const orders = await Order.find({});

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    // Format orders: ensure date fields are always strings
    const formattedOrders = orders.map(order => ({
      ...order.toObject(),
      orderDate: order.orderDate ? order.orderDate.toISOString() : null,
      orderUpdateDate: order.orderUpdateDate ? order.orderUpdateDate.toISOString() : null,
    }));

    res.status(200).json({
      success: true,
      data: formattedOrders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

const getOrderDetailsForAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    // Format single order
    const formattedOrder = {
      ...order.toObject(),
      orderDate: order.orderDate ? order.orderDate.toISOString() : null,
      orderUpdateDate: order.orderUpdateDate ? order.orderUpdateDate.toISOString() : null,
    };

    res.status(200).json({
      success: true,
      data: formattedOrder,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    await Order.findByIdAndUpdate(id, { orderStatus, orderUpdateDate: new Date() });

    res.status(200).json({
      success: true,
      message: "Order status updated successfully!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
};
