import express from 'express';
import resize from './api/resize';
import preview from './api/preview';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('API Route');
});

routes.use('/resize', resize);
routes.use('/preview', preview);

export default routes;
