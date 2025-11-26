const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const dialect = process.env.DB_DIALECT || 'sqlite';

let sequelize;
if (dialect === 'sqlite') {
  const storage = process.env.DB_STORAGE || path.join(__dirname, '../../database.sqlite');
  sequelize = new Sequelize({ dialect: 'sqlite', storage, logging: false });
} else {
  const dbUrl = process.env.DB_URL;
  sequelize = new Sequelize(dbUrl, { dialect, logging: false });
}

const User = require('./user')(sequelize, DataTypes);
const Store = require('./store')(sequelize, DataTypes);
const Rating = require('./rating')(sequelize, DataTypes);

// Associations
User.hasMany(Rating, { foreignKey: 'userId' });
Rating.belongsTo(User, { foreignKey: 'userId' });

Store.hasMany(Rating, { foreignKey: 'storeId' });
Rating.belongsTo(Store, { foreignKey: 'storeId' });

module.exports = { sequelize, Sequelize, User, Store, Rating };
