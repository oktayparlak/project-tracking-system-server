import { DataTypes } from 'sequelize';

import sequelize from '../configs/database.js';

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Project;
