import { Router } from 'express';
import cors from 'cors';

import costumerRoutes from './Costumers';

const app = Router();

app.use(cors())
app.use('/costumers', costumerRoutes);

export default app;