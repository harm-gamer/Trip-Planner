import express from 'express';
import { planTrip } from '../controller/tripController.js';

const router = express.Router();

router.post('/plan', planTrip);

export default router;
