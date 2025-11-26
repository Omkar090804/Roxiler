const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { authMiddleware } = require('../middleware/auth');
const { User } = require('../models');

// update password
router.post('/update-password', authMiddleware, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) return res.status(400).json({ error: 'Provide old and new password' });
    const ok = await bcrypt.compare(oldPassword, req.user.passwordHash);
    if (!ok) return res.status(400).json({ error: 'Old password incorrect' });
    const hash = await bcrypt.hash(newPassword, 10);
    req.user.passwordHash = hash;
    await req.user.save();
    res.json({ ok: true });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
});

module.exports = router;
