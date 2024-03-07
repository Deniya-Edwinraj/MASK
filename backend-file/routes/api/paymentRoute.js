import express from 'express';
import{
    processPayment, sendStripApi} from '../../controllers/paymentController.js';
import { protect} from '../../middleware/authMiddlesware.js';

const router = express.Router();


router.post("/process",protect, processPayment);
router.get("/sendapi", protect,sendStripApi);
export default router;
