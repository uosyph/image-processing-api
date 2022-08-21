import express from 'express';
import path from 'path';

import routes from './routes/index';
import imgLogger from './logging/logExistingImgs';
import resImgLogger from './logging/logResizedImg';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname + 'assets')));
app.set('view engine', 'ejs');

// api route
app.use('/api', routes);

// main route
app.get('/', (req, res) => {
    res.send('Main Route');
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

// write existing images names to a CSV file
imgLogger();
// make CSV file for resized images later
resImgLogger();

export default app;
