"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const logExistingImgs_1 = __importDefault(require("./logging/logExistingImgs"));
const logResizedImg_1 = __importDefault(require("./logging/logResizedImg"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname + 'assets')));
app.set('view engine', 'ejs');
// api route
app.use('/api', index_1.default);
// main route
app.get('/', (req, res) => {
    res.send('Main Route');
});
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
// write existing images names to a CSV file
(0, logExistingImgs_1.default)();
// make a CSV file for resized images later
(0, logResizedImg_1.default)();
exports.default = app;
