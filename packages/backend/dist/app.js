"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const port = 3030;
const app = (0, express_1.default)();
const router = new routes_1.default(app);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Hello Node!');
});
router.init();
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
//# sourceMappingURL=app.js.map