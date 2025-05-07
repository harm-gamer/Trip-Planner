import express from 'express';
import { SignUser } from '../controller/userController';

const router = express.Router();

router.get('/signin',SignUser)

export default router;
