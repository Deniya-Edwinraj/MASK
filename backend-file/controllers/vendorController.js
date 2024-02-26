import asyncHandler from 'express-async-handler'
import vendorModel from '../models/vendorModel.js';
import slugify from 'slugify';

// create new vendor
const createVendor = asyncHandler(async (req, res) => {
    try {
        if (req.body.name) {
            req.body.slug = slugify(req.body.name);
        }
        const newVendor = await vendorModel.create(req.body);
        res.json(`Created Successfully`);
    } catch (error) {
        throw new Error(error);
    }
  });

  // get all vendors 
const getallVendors = asyncHandler(async (req, res) => {
    try {
        const allVendors = await vendorModel.find();
        res.json(allVendors);
    } catch (error) {
        throw new Error(error);
    }
});

// get a vendor
const getaVendor = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const foundVendor = await vendorModel.findById(id);
  
      if (!foundVendor) {
        return res.status(404).json({ error: 'Vendor not found' });
      }
  
      res.json({
        vendor: foundVendor,
      });
    } catch (error) {
      console.error('Error getting vendor:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// update a vendor
const updateaVendor =asyncHandler(async (req, res) => {
    // res.status(200).json({message: 'Update user profile'});
    const vendor = await vendorModel.findById(req.vendor._id);

    if (vendor) {
      vendor.name = req.body.name || vendor.name;
      vendor.email = req.body.email || vendor.email;
  
  
      const updatedvendor = await vendor.save();
  
      res.status(200).json(`Update sucessfully`);
    } else {
      res.status(404);
      throw new Error('Vendor not found');
    }
});

// Delete a vendor
const deleteaVendor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const deleteaVendor = await vendorModel.findByIdAndDelete(id);
      res.json({
        deleteaVendor,
      });
    } catch (error) {
      throw new Error(error);
    }
  });

  
export {
    createVendor,
    getallVendors,
    getaVendor,
    updateaVendor,
    deleteaVendor
}