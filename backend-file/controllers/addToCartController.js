import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// create cart
// const newCart = async (req, res) => {
//     const { productId } = req.params;
//     const userId = req.user._id;

//     try {
//         const product = await Product.findById(productId);

//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         let cart = await Cart.findOne({ user: userId });

//         if (!cart) {
//             cart = new Cart({ user: userId });
//         }

//         let item = cart.items.find(i => i.product.toString() === productId);

//         if (item) {
//             item.quantity++;
//         } else {
//             cart.items.push({ product: productId });
//         }

//         await cart.save();

//         res.status(200).json({ message: 'Product added to cart successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };


const addToCart = async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
  
      // Check if the product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Find or create a user's cart
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }
  
      // Check if the product is already in the cart
      const existingItem = cart.items.find((item) => item.productId.equals(productId));
  
      if (existingItem) {
        // If the product is already in the cart, update the quantity
        existingItem.quantity += quantity;
      } else {
        // If the product is not in the cart, add a new item
        cart.items.push({ productId, quantity });
      }
  
      await cart.save();
  
      res.status(200).json({ message: 'Item added to cart successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


export {
    addToCart
};