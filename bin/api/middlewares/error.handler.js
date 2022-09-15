"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
err, _req, res, _next) {
    const errors = err.errors || [{ message: err.message }];
    res.status(err.status || 500).json({ errors });
}
exports.default = errorHandler;
//# sourceMappingURL=error.handler.js.map