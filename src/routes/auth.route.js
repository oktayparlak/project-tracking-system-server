import express from 'express';

import { login } from '../controllers/auth.controller.js';

const router = express.Router();

/** Post */
router.post('/login', login);

export default router;
