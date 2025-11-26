const express = require('express');
const router = express.Router();
const { Rating, Store } = require('../models');
const { authMiddleware } = require('../middleware/auth');

// submit or update rating by user
router.post('/:storeId', authMiddleware, async (req, res) => {
  try {
    const storeId = parseInt(req.params.storeId,10);
    const { score, comment } = req.body;
    if (!score || score < 1 || score > 5) return res.status(400).json({ error: 'Score 1-5 required' });
    const store = await Store.findByPk(storeId);
    if (!store) return res.status(404).json({ error: 'Store not found' });

    // check existing rating
    let rating = await Rating.findOne({ where: { storeId, userId: req.user.id } });
    if (rating) {
      rating.score = score;
      rating.comment = comment;
      await rating.save();
      return res.json(rating);
    } else {
      rating = await Rating.create({ score, comment, storeId, userId: req.user.id });
      return res.json(rating);
    }
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

// get a user's rating for a store
router.get('/:storeId/me', authMiddleware, async (req, res) => {
  const rating = await Rating.findOne({ where: { storeId: req.params.storeId, userId: req.user.id } });
  res.json(rating || null);
});

module.exports = router;
