import { Router } from 'express';
import { AuthController } from './controllers/auth.controller';

const router = Router();
const authController = new AuthController();

// Authentication routes
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

export default router;
