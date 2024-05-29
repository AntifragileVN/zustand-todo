"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/register', async (_, res) => {
    res.send('Add registration logic there');
});
exports.default = router;
//# sourceMappingURL=user.route.js.map