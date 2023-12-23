import express from 'express';

import verify from '../middlewares/verify.js';
import { getUser, getAllAcademicians } from '../controllers/user.controller.js';

const router = express.Router();

/** Get */
router.get('/', verify, getUser);

router.get('/academicians', getAllAcademicians);

export default router;
