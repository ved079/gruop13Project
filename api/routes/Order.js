const express = require("express");
const orderRoute = express.Router();
const protect = require("../middleware/Auth");
const asyncHandler = require("express-async-handler");
const Order = require("../models/Order");

orderRoute.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethods,
      shippingPrice,
      taxPrice,
      totalPrice,
      price,
    } = req.body;
    console.log(orderItems)

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("no order items found");
    } else {
      const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethods,
        shippingPrice,
        taxPrice,
        totalPrice,
        price,
        user: req.user._id,
      });

    
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  })
);


//order payment
orderRoute.put(
  "/:id/payment",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();

      // Safely access req.body.payer and its properties
      const payerInfo = req.body.payer || {};
      order.paymentResult = {
        id: req.body.id || null,
        status: req.body.status || "Pending",
        update_time: req.body.create_time || Date.now(),
        email_address: payerInfo.email_address || "Not Provided",
      };

      const updatedOrder = await order.save();

      res.status(200).json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);


//order lists
orderRoute.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {

    const orders = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404);
      throw new Error("Orders Not Found");
    }
  })
);

//order detail
orderRoute.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

module.exports = orderRoute;