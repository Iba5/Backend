import { Router } from 'express';
import { UserController } from './controllers/user.controller';
// import { AuthMiddleware } from '../security/middleware/auth.middleware';

const router = Router();
const userController = new UserController();

// User routes - TODO: Add authentication middleware
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
