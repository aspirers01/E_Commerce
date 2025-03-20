const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      name: {
        type: String,
        required: true,
      },
      mobileNumber: {
        type: Number,
        required: true,
      },
      houseNumber: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      landmark: {
        type: String,
        required: true,
      },
      postalCode: {
        type: Number,
        required: true,
      },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
