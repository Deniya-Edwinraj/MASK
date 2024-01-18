import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import slugify from 'slugify';
import { JSONCookie } from 'cookie-parser';

// create new product
const createProduct = asyncHandler(async (req, res) => {
   try {
      if (req.body.name) {
         req.body.slug = slugify(req.body.name);
      }
      const newProduct = await Product.create(req.body);
      res.json(newProduct);
    } catch (error) {
      throw new Error(error);
    }
});

// update product
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;console.log(req.body);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findByIdAndUpdate( id,req.body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// get a product
const getaProduct = asyncHandler(async (req, res) => {
   const { id } = req.params;
   try {
     const findProduct = await Product.findById(id);
     res.json(findProduct);
   } catch (error) {
     throw new Error(error);
   }
 });

// get all products by filetring, sorting, limiting, pagination

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      // if (skip >= productCount) throw new Error("This Page does not exists");
      if (skip >= productCount) {
        throw new Error("This Page does not exist");
      }
    }
    
    const product = await query;
    res.json(product);

  } catch (error) {
     console.error('Error fetching products:', error);
     res.status(500).json({ error: 'Internal Server Error' });
  }
});




export { 
   createProduct,
   getaProduct,
   getAllProduct,
   updateProduct,
   deleteProduct,
 };