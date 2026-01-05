import { Router } from 'express';
import { RegistrationController } from './controllers/registration.controller';

const router = Router();
const registrationController = new RegistrationController();

// Registration routes - TODO: Add authentication middleware
router.post('/', registrationController.registerForEvent);
router.get('/:id', registrationController.getRegistrationById);
router.get('/event/:eventId', registrationController.getEventRegistrations);
router.get('/user/:userId', registrationController.getUserRegistrations);
router.post('/:id/cancel', registrationController.cancelRegistration);
router.post('/:id/approve', registrationController.approveRegistration);
router.post('/:id/reject', registrationController.rejectRegistration);

export default router;
