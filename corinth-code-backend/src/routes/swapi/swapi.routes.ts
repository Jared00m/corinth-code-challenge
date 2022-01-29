import express from 'express';
import * as swapiControllers from '../../controllers/swapi/swapi.contoller';

const router = express.Router();

router.get('/people', swapiControllers.getPeople);
router.get('/person', swapiControllers.getPerson);

export default router;