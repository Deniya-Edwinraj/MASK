const express = require('express');
const addToCart = require('../controllers/addToCart');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const result = await addToCart(req, res, { userId, productId, quantity });

    res.status(result.statusCode).json(result);
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
});

module.exports = router;