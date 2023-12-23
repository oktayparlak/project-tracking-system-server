import express from 'express';

import verify from '../middlewares/verify.js';
import { getUser } from '../controllers/user.controller.js';

const router = express.Router();

/** Get */
router.get('/', verify, getUser);

export default router;
