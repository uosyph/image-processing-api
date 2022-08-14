import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('test');
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

export default app;
