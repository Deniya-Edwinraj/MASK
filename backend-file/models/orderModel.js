// import mongoose from "mongoose";

// var orderSchema = new mongoose.Schema(
//   {
//     products: [
//       {
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Product",
//         },
//         count: Number,
//         color: String,
//       },
//     ],
//     paymentIntent: {},
//     orderStatus: {
//       type: String,
//       default: "Not Processed",
//       enum: [
//         "Not Processed",
//         "Cash on Delivery",
//         "Processing",
//         "Dispatched",
//         "Cancelled",
//         "Delivered",
//       ],
//     },
//     orderby: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );


// module.exports = mongoose.model("Order", orderSchema);


import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
        address: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        }
    // user: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    // orderItems: [{
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     quantity: {
    //         type: Number,
    //         required: true
    //     },
    //     image: {
    //         type: String,
    //         // required: true
    //     },
    //     price: {
    //         type: Number,
    //         required: true
    //     },
    //     product: {
    //         type: mongoose.SchemaTypes.ObjectId,
    //         required: true,
    //         ref: 'Product'
    //     }

    // }],
    // itemsPrice: {
    //     type: Number,
    //     required: true,
    //     default: 0.0
    // },
    // deliveryCharge: {
    //     type: Number,
    //     required: true,
    //     default: 0.0
    // },
    // totalPrice: {
    //     type: Number,
    //     required: true,
    //     default: 0.0
    // },
    // paymentInfo: {
    //     id: {
    //         type: String,
    //         required: true
    //     },
    //     status: {
    //         type: String,
    //         required: true
    //     }
    // },
    // paidAt: {
    //     type: Date
    // },
    // deliveredAt: {
    //     type: Date
    // },
    // orderStatus: {
    //     type: String,
    //     required: true,
    //     default: 'Processing'
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
},
{ timestamps: true }
);

const orderModel = mongoose.model('Order', orderSchema);

export default orderModel;
