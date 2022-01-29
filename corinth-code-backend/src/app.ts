import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

import swapiRoutes from './routes/swapi/swapi.routes';

app.use('/swapi', swapiRoutes);

export default app;