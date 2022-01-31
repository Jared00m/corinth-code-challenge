import express from 'express';
import * as swapiControllers from '../../controllers/swapi/swapi.contoller';

const router = express.Router();

router.get('/people', swapiControllers.getPeople);
router.get('/person', swapiControllers.getPerson);
router.get('/films', swapiControllers.getFilm);
router.get('/starships', swapiControllers.getStarship);
router.get('/homeworld', swapiControllers.getHomeworld);

export default router;