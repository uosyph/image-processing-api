import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

// api route
app.use('/api', routes);

// main route
app.get('/', (req, res) => {
    res.send('main');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


export default app;
