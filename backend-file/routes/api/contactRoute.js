import express from 'express';
import { 
    createContactMessage,
    getallContact,
    getSingleContact 
} from '../../controllers/contactController.js';

const router = express.Router();
import {isAdmin,protect} from '../../middleware/authMiddlesware.js';


router.post("/new", protect, createContactMessage);
router.get('/',protect,isAdmin,getallContact);
router.get('/:id',protect,isAdmin,getSingleContact);


export default router;