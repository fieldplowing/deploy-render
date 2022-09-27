"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// import controller from './controller';
const Dir = path_1.default.normalize(__dirname + '/../../../../public');
exports.default = express_1.default
    .Router()
    .get('/*', (_req, res) => {
    res.sendFile(Dir + '/index.html');
});
//# sourceMappingURL=router.js.map