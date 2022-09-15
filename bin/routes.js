"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./api/controllers/memo/router"));
const router_2 = __importDefault(require("./api/controllers/user/router"));
function routes(app) {
    app.use('/api/v1/memo', router_1.default);
    app.use('/api/v1/user', router_2.default);
}
exports.default = routes;
//# sourceMappingURL=routes.js.map