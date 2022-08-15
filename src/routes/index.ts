import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
    console.log('main API route');
});

export default routes;
