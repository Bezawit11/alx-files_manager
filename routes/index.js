import { Express } from 'express';
import AppController from '../controllers/AppController';

const router  = Express.Router(); 

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
