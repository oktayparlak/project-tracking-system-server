import express from 'express';

import verify from '../middlewares/verify.js';
import { create, getById, getMyPendingApplications, getMyApprovedApplications, update } from '../controllers/application.controller.js';

const router = express.Router();

/** Get */
router.get('/:id', getById);

router.get('/my/pending', verify, getMyPendingApplications);

router.get('/my/approved', verify, getMyApprovedApplications);

/** Post */
router.post('/', verify, create);

/** Patch */
router.patch('/:id', verify, update);

export default router;
