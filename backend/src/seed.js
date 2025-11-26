const { sequelize, User, Store } = require('./models');
const bcrypt = require('bcryptjs');

async function seed() {
  await sequelize.sync({ alter: true });
  const adminExists = await User.findOne({ where: { email: 'admin@example.com' } });
  if (!adminExists) {
    await User.create({ name: 'System Administrator Sample UserNameLongEnough', email: 'admin@example.com', address: 'Admin Address', passwordHash: await bcrypt.hash('Admin@123',10), role: 'admin' });
  }
  const ownerExists = await User.findOne({ where: { email: 'owner@example.com' } });
  if (!ownerExists) {
    await User.create({ name: 'Store Owner UserNameLongEnough', email: 'owner@example.com', address: 'Owner Address', passwordHash: await bcrypt.hash('Owner@123',10), role: 'owner' });
  }
  const s = await Store.create({ name: 'Sample Store', email: 'store@example.com', address: 'Store Address sample' });
  console.log('Seed done');
  process.exit(0);
}

seed();
