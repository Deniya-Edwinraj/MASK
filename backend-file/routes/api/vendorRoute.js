import express from 'express';
import {
    createVendor,
    getallVendors,
    getaVendor,
    updateaVendor,
    deleteaVendor
} from '../../controllers/vendorController.js';

const router = express.Router();
import {isAdmin,protect} from '../../middleware/authMiddlesware.js';

router.post("/new", protect,isAdmin, createVendor);
router.get("/", protect,isAdmin, getallVendors);
router.get("/:id", protect,isAdmin, getaVendor);
router.put("/:id",protect,isAdmin,updateaVendor);
router.delete("/:id", protect,isAdmin, deleteaVendor);

export default router;
