const express = require('express');
const router = express.Router();
const { Store, Rating, User } = require('../models');
const { authMiddleware, role } = require('../middleware/auth');

// list stores (public) with avg rating and optionally search by name/address
router.get('/', async (req, res) => {
  try {
    const { q } = req.query;
    const where = {};
    if (q) {
      where.name = { [require('sequelize').Op.like]: '%' + q + '%' };
    }
    const stores = await Store.findAll({ where });
    const result = await Promise.all(stores.map(async s => {
      const ratings = await Rating.findAll({ where: { storeId: s.id } });
      const avg = ratings.length ? (ratings.reduce((a,b)=>a+b.score,0)/ratings.length).toFixed(2) : null;
      resObj = { id: s.id, name: s.name, address: s.address, overallRating: avg };
      return resObj;
    }));
    res.json(result);
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

// owner dashboard: list users who rated their store and average rating
router.get('/owner/:storeId/dashboard', authMiddleware, role('owner'), async (req, res) => {
  try {
    const storeId = parseInt(req.params.storeId,10);
    const ratings = await Rating.findAll({ where: { storeId }, include: [{ model: User, attributes: ['id','name','email'] }] });
    const avg = ratings.length ? (ratings.reduce((a,b)=>a+b.score,0)/ratings.length).toFixed(2) : null;
    res.json({ average: avg, raters: ratings.map(r=>({ id: r.User.id, name: r.User.name, email: r.User.email, score: r.score })) });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

module.exports = router;
