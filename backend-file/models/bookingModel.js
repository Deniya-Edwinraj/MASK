import mongoose from "mongoose";

const bookingSchema= mongoose.Schema({
    deliveryInfo: {
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
        },
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
      
    },
    bookings: [{
        function_type: {
            type: String,
            required: true
        },
        theme: {
            type: Number,
            required: true
        },
        date_of_delivery: {
            type: Date,
            require: true
        },
        description:{
            type: String,
            require: true
        }
    }],
    bookingStatus: {
        type: String,
        // required: true,
        default: 'Processing'
    }
},
    { timestamps: true }
);

const bookingModel = mongoose.model('Booking', bookingSchema);

export default bookingModel;
