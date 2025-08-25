const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/create-admin", async (req, res) => {
  try {
    const adminData = {
      userName: "admin",
      email: "admin@example.com",
      password: "$2b$10$JwguGLEmsPGOdfp7jO9kXeVvF6x0eobxDeZHO4dtRf7WvGjiHsJ4e",
      role: "admin",
    };

    // Remove old admin if exists
    await User.deleteOne({ email: adminData.email });

    // Create new admin
    const newAdmin = await User.create(adminData);
    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      user: newAdmin,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Some error occurred" });
  }
});

module.exports = router;
