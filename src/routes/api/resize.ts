import express from 'express';

const resize = express.Router();
var filename;
var height;
var width;

resize.get('/', (req, res) => {
    res.send("localhost:3000/api/resize?filename=imagename&height=400&width=400");
    filename = req.query.filename;
    height = req.query.height;
    width = req.query.width;
});

export default resize;
export {filename, height, width};
