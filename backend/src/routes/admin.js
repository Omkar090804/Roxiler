const express = require('express');
const router = express.Router();
const { authMiddleware, role } = require('../middleware/auth');
const { User, Store, Rating } = require('../models');
const bcrypt = require('bcryptjs');

// Admin protected
router.use(authMiddleware, role('admin'));

// add store
router.post('/stores', async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const store = await Store.create({ name, email, address });
    res.json(store);
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

// add user (normal or admin)
router.post('/users', async (req, res) => {
  try {
    const { name, email, address, password, role } = req.body;
    if (!['admin','user','owner'].includes(role)) return res.status(400).json({ error: 'Invalid role' });
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email exists' });
    const passwordHash = await bcrypt.hash(password || 'Password@1', 10);
    const user = await User.create({ name, email, address, passwordHash, role });
    res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

// stats dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const totalUsers = await User.count();
    const totalStores = await Store.count();
    const totalRatings = await Rating.count();
    res.json({ totalUsers, totalStores, totalRatings });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

// list stores with rating
router.get('/stores', async (req, res) => {
  try {
    const stores = await Store.findAll();
    const result = await Promise.all(stores.map(async s => {
      const avg = await Rating.findAll({ where: { storeId: s.id } });
      const avgVal = avg.length ? (avg.reduce((a,b)=>a+b.score,0)/avg.length).toFixed(2) : null;
      return { id: s.id, name: s.name, email: s.email, address: s.address, rating: avgVal };
    }));
    res.json(result);
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

// list users (filtering via query)
router.get('/users', async (req, res) => {
  try {
    const { name, email, address, role } = req.query;
    const where = {};
    if (name) where.name = name;
    if (email) where.email = email;
    if (address) where.address = address;
    if (role) where.role = role;
    const users = await User.findAll({ where });
    res.json(users.map(u=>({ id:u.id, name:u.name, email:u.email, address:u.address, role:u.role })));
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

module.exports = router;
