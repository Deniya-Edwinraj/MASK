import express from 'express';
import{
    addToCart
} from '../../controllers/addToCartController.js';

const router = express.Router();

router.post('/add/:productId', addToCart);

export default router;