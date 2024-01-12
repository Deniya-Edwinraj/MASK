import express from 'express';
import { 
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
 } from '../../controllers/productController.js';
import isAdmin from '../../middleware/authMiddlesware.js';
import authMiddlesware from '../../middleware/authMiddlesware.js';
const router = express.Router();


router.post("/", createProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;