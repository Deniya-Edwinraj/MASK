import express from 'express';
import { 
    createContactMessage,
    getallContact 
} from '../../controllers/contactController.js';

const router = express.Router();
import {isAdmin,protect} from '../../middleware/authMiddlesware.js';


router.post("/new", protect, createContactMessage);
router.get('/',protect,isAdmin,getallContact);


export default router;