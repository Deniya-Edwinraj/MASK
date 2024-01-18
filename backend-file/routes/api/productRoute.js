import express from 'express';
import { 
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
 } from '../../controllers/productController.js';
import { isAdmin,protect} from '../../middleware/authMiddlesware.js';


const router = express.Router();


router.get("/:id", getaProduct);
router.get("/", getAllProduct);

//Admin Routes
router.put("/:id",protect,isAdmin, updateProduct);
router.delete("/:id",protect,isAdmin, deleteProduct);
router.post("/",protect,isAdmin, createProduct);

export default router;