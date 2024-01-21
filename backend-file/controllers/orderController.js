import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';


//Create New Order - api/order/new
const newOrder =  asyncHandler( async (req, res, next) => {
    const {
        orderItems,
        deliveryInfo,
        itemsPrice,
        deliveryCharge,
        totalPrice,
        paymentInfo
    } = req.body;

    const order = await Order.create({
        orderItems,
        deliveryInfo,
        itemsPrice,
        deliveryCharge,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user.id
    })

    res.status(200).json({
        success: true,
    })
});

//Get Single Order - api/order/:id
const getSingleOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if(!order) {
        return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        order
    })
});

//Get Loggedin User Orders - /api/order/
const myOrders = asyncHandler(async (req, res, next) => {
    const orders = await Order.find({user: req.user.id});

    res.status(200).json({
        success: true,
        orders
    })
});

//Admin: Get All Orders - api/order/orders
// const orders = asyncHandler(async (req, res, next) => {
//     const orders = await Order.find();

//     let totalAmount = 0;

//     orders.forEach(order => {
//         totalAmount += order.totalPrice
//     })

//     res.status(200).json({
//         success: true,
//         totalAmount,
//         orders
//     })
// });

// Controller to get all orders
const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate('user').populate('orderItems.product');
  
      let totalAmount = 0;
  
      orders.forEach(order => {
        totalAmount += order.totalPrice;
      });
  
      res.status(200).json({
        success: true,
        totalAmount,
        orders
      });
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
  };
     


//Admin: Update Order / Order Status - api/v1/order/:id
// const updateOrder =  asyncHandler(async (req, res, next) => {
//     const order = await Order.findById(req.params.id);

//     if(order.orderStatus == 'Delivered') {
//         return next(new ErrorHandler('Order has been already delivered!', 400))
//     }
//     //Updating the product stock of each order item
//     order.orderItems.forEach(async orderItem => {
//         await updateStock(orderItem.product, orderItem.quantity)
//     })

//     order.orderStatus = req.body.orderStatus;
//     order.deliveredAt = Date.now();
//     await order.save();

//     res.status(200).json({
//         success: true
//     })
    
// });

// async function updateStock (productId, quantity){
//     const product = await Product.findById(productId);
//     product.stock = product.stock - quantity;
//     product.save({validateBeforeSave: false})
// };

const updateOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('Order has already been delivered!', 400));
    }

    // Updating the product stock of each order item using a for...of loop
    for (const orderItem of order.orderItems) {
        await updateStock(orderItem.product, orderItem.quantity);
    }

    order.orderStatus = req.body.orderStatus;
    order.deliveredAt = Date.now();
    await order.save();

    res.status(200).json({
        success: true
    });
});

async function updateStock(productId, quantity) {
    const product = await Product.findById(productId);
    product.stock = product.stock - quantity;
    await product.save({ validateBeforeSave: false });
}


// Admin: Delete Order - api/v1/order/:id
const deleteOrder = asyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if(!order) {
        return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
    }

    await order.remove();
    res.status(200).json({
        success: true
    })
});


export { 
    newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder,
    deleteOrder,
  };