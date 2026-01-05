import { Router } from 'express';
import { EventController } from './controllers/event.controller';

const router = Router();
const eventController = new EventController();

// Event routes - TODO: Add authentication middleware
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.post('/', eventController.createEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
router.post('/:id/publish', eventController.publishEvent);
router.post('/:id/cancel', eventController.cancelEvent);

export default router;
