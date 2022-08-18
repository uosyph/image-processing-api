import express from 'express';

import routes from './routes/index';
import imgLogger from './logging/logExistingImgs';

const app = express();
const PORT = 3000;

// api route
app.use('/api', routes);

// main route
app.get('/', (req, res) => {
    res.send('Main Route');
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

// write existing images names to a csv file
imgLogger();

export default app;
