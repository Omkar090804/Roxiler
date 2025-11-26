require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const storeRoutes = require('./routes/stores');
const ratingRoutes = require('./routes/ratings');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/users', userRoutes);

// health
app.get('/api/health', (req, res) => res.json({ok:true}));

const PORT = process.env.PORT || 4000;
sequelize.sync({ alter: true }).then(async () => {
  console.log('DB synced');
  app.listen(PORT, () => console.log('Server started on', PORT));
}).catch(err => {
  console.error('Failed to sync DB', err);
});
