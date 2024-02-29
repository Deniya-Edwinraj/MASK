import mongoose from "mongoose";

const bookingSchema= mongoose.Schema({
   
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
        function_type: {
            type: String,
            required: true
        },
        theme: {
            type: String,
            required: true
        },
        date_of_delivery: {
            type: Date,
            require: true
        },
        description:{
            type: String,
            require: true
        },
        image: {
            public_id: String,
            secure_url: String,
        },
  
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
