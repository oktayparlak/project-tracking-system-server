import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

import sequelize from './src/configs/database.js';
import initAssociations from './src/models/index.js';
import routes from './src/routes/index.js';

/** Middlewares */
config();
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
  })
);

/** Initalize Relations */
initAssociations();

/** Routes */
routes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/** Database Connection and Starting Server */
sequelize.sync({ force: true }).then(() => {
  console.log('Database connected!');
  /** Server */
  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });
});
