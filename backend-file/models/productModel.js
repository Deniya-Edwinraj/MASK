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
    // quantity: {
    //     type: Number,
    //     required: true
    // },
    // size: {
    //     type: String,
    // },
    price: {
        type: String,
        
    },
    image: {
        public_id: String,
        secure_url: String,
    },
    sold: {
        type: Number,
        default: 0,
    },
    // description: {
    //     type: String,

    // }
},
{ timestamps: true }
);

productSchema.pre("remove", function (next) {

    this.image.forEach((image) => {
      cloudinary.uploader.destroy(image.public_id);
    });
    next();
  });

const Product = mongoose.model('Product', productSchema);

export default Product;
  