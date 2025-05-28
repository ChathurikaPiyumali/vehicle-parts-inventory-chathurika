 const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);
//setup
const Part = sequelize.define('Part', {
  name:       { type: DataTypes.STRING, allowNull: false },
  partType:   { type: DataTypes.STRING, allowNull: false },
  brand:      { type: DataTypes.STRING },
  quantity:   { type: DataTypes.INTEGER, defaultValue: 0 },
  price:      { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status:     { type: DataTypes.ENUM('In Stock', 'Out of Stock'), defaultValue: 'In Stock' },
}, {
  timestamps: false
});

module.exports = { sequelize, Part, Op };

