import express from 'express';
import {
    newCart
} from '../../controllers/addToCartController.js';

const router = express.Router();

router.post('/add/:productId', newCart);

export default router;