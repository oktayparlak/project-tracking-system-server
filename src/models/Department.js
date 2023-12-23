import { DataTypes } from 'sequelize';

import sequelize from '../configs/database.js';

const Department = sequelize.define('Department', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

export default Department;
