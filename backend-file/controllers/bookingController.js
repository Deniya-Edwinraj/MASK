import asyncHandler from 'express-async-handler';
import Booking from '../models/bookingModel.js';

//Create New Booking - api/booking/new
const newBooking =  asyncHandler( async (req, res, next) => {
    const {
        bookings,
        deliveryInfo,
        advancedPrice,
        deliveryCharge,
        totalPrice,
        paymentInfo
    } = req.body;

    const booking = await Booking.create({
        bookings,
        deliveryInfo,
        advancedPrice,
        deliveryCharge,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user.id
    })

    res.status(200).json(`Booking created succesfully`)
});

//Get Single Booking - api/booking/:id
const getSingleBooking = asyncHandler(async (req, res, next) => {
    const booking = await Booking.findById(req.params.id).populate('user', 'name email');
    if(!booking) {
        return next(new ErrorHandler(`Booking not found with this id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        booking
    })
});

//Get Loggedin User Bookings - /api/booking/
const myBooking = asyncHandler(async (req, res, next) => {
    const bookings = await Booking.find({user: req.user.id});

    res.status(200).json({
        success: true,
        bookings
})
});

//Admin: Get All Bookings - api/booking/bookings
// const getAllBookings = async (req, res) => {
//     try {
//       const bookings = await Booking.find().populate('user').populate('bookings');
     
//       let totalAmount = 0;
//       bookings.forEach((booking) => {
//         totalAmount += booking.totalPrice;
//       });
  
//       res.status(200).json({
//         success: true,
//         totalAmount,
//         bookings
//       });
//     } catch (error) {
//       console.error(error);
  
//       res.status(500).json({
//         success: false,
//         message: 'Internal Server Error'
//       });
//     }
//   };

const getAllBookings = asyncHandler(async (req, res, next) => {
  const bookings = await Booking.find();
  console.log(bookings);
  if (!bookings) {
      return next(new ErrorHandler('No bookings found', 404));
  }

  res.status(200).json(bookings);
});

//Admin: Update Booking / Booking Status - api/v1/booking/:id
const updateBooking = asyncHandler(async (req, res, next) => {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
        return next(new ErrorHandler('Booking not found', 404));
    }

    if (booking.bookingStatus === 'Delivered') {
        return next(new ErrorHandler('Booking has already been delivered!', 400));
    }

    booking.bookingStatus = req.body.bookingStatus || booking.bookingStatus;
    booking.deliveredAt = req.body.deliveredAt || Date.now();

    await booking.save();

    res.status(200).json({ message: 'Updated successfully' });
});

// Admin: Delete Booking - api/v1/order/:id
const deleteBooking = asyncHandler(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
      return next(new ErrorHandler(`Booking not found with this id: ${req.params.id}`, 404));
  }

  await Booking.deleteOne({ _id: req.params.id }); // Use deleteOne to remove the order
  res.status(200).json(`Booking deleted successfully`);
});

export {
    newBooking,
    getSingleBooking,
    myBooking,
    getAllBookings,
    updateBooking,
    deleteBooking
};