import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },

    foodId: {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true,
     },
    
     quantity: {
        type: Number,
        require: true
     }
  },
  {
    timestamps: true
  }
)

const Carts = mongoose.model('Cart', cartSchema);

export default Carts;