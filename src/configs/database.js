import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

const sequelize = new Sequelize(process.env.DB_URI_LOCAL, {
  logging: false,
});

export default sequelize;
