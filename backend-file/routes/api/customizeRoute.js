import express from 'express';
import{
    createCustomize,
    getallCustomize,
    getaCustomize
} from '../../controllers/customizeController.js';
 
const router = express.Router();
import {isAdmin,protect} from '../../middleware/authMiddlesware.js';


router.post("/new", protect, createCustomize);
router.get('/',protect,isAdmin,getallCustomize);
router.get('/:id',protect,isAdmin,getaCustomize);


export default router;