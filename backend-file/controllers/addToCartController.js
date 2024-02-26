import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

// create cart
const addToCart = asyncHandler(async (req, res, next) => {
    try {
      const userId = req.user;
      const foodToAddToCart = req.params.id.toString();
      let qty = req.params.qty;
  
      const foundFood = await Food.findById(foodToAddToCart);
  
      const findUsersCart = await Cart.find({ userId: userId._id });
  
      const checkCart = findUsersCart.filter((eachItemInUserCart) => {
        return eachItemInUserCart.foodId.toString() === foundFood._id.toString();
      });
  
      if (checkCart == 0) {
        if (
          foundFood._id.toString() === foodToAddToCart &&
          (qty <= 0 || qty === null || qty === undefined)
        ) {
          qty = 1;
        }
        if (foundFood._id.toString() === foodToAddToCart && qty >= 1) {
          await new Cart({
            userId: userId._id,
            foodId: foundFood,
            qty: qty,
          }).save();
          return res.status(201).json(`${foundFood.name} was added successfully`);
        }
      }
  
      return res
        .status(501)
        .json(`This isn't implemented as you have ${foundFood.name} in your cart before`);
    } catch (error) {
      next(error);
    }
  });

  export default {
    addToCart,
  };