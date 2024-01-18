import express from 'express';
import { 
    newOrder,
    getSingleOrder, 
    myOrders, 
    orders, 
    updateOrder, 
    deleteOrder, 
} from '../../controllers/orderController.js';
const router = express.Router();
import { isAdmin,protect} from '../../middleware/authMiddlesware.js';


router.post("/new",protect, newOrder);
router.get('/:id',protect,getSingleOrder);
router.get('/',protect,myOrders);

//Admin Routes
router.get('./orders',protect,isAdmin,orders);
router.put('./:id',protect,isAdmin,updateOrder);
router.delete('./:id',protect,isAdmin,deleteOrder);

export default router;