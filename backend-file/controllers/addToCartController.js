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
const newCart = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    try {
        console.log("Finding product...");
        const product = await Product.findById(productId).exec();

        if (!product) {
            console.log("Product not found.");
            return res.status(404).json({ message: 'Product not found' });
        }

        console.log("Finding cart...");
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            console.log("Creating new cart...");
            cart = new Cart({ user: userId });
        }

        console.log("Finding item...");
        let item = cart.items.find(i => i.product.toString() === productId);

        if (!item) {
            console.log("Creating new item...");
            item = { product: productId, quantity: 1 };
            cart.items.push(item);
        } else {
            console.log("Incrementing item quantity...");
            item.quantity++;
        }

        console.log("Saving cart...");
        await cart.save();

        console.log("Sending response...");
        res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error("Error:", error);
        console.error("Sending error response...");
        res.status(500).json({ message: 'Server error' });
    }
});


export {
    newCart
};