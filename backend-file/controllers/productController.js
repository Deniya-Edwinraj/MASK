import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import slugify from 'slugify';

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
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);


    const { category, sort } = req.query;

    let query = {};

    if (category) {
      query.category = category;
    }

    let products;

    if (sort) {
      const sortOptions = {};
      sortOptions.quantity = sort === 'asc' ? 1 : -1;

      products = await Product.find(query).sort(sortOptions).exec();
    } else {
      products = await Product.find(query).exec();
    }

    res.json(products);
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