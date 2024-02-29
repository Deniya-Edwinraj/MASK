import mongoose from "mongoose";

const productSchema= mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,

    },
    price: {
        type: String,
        require: true
    },
    image: {
        public_id: String,
        secure_url: String,
    },
    sold: {
        type: Number,
        default: 0,
    },
},
{ timestamps: true }
);


const Product = mongoose.model('Product', productSchema);

export default Product;
  