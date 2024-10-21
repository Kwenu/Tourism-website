import express from 'express';
import { sendBookingEmail } from '../controllers/emailController.js';

const router = express.Router();

router.post('/send-email', sendBookingEmail);

export default router;
