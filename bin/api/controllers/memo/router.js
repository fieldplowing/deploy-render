"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
exports.default = express_1.default
    .Router()
    .get('/', controller_1.default.all)
    .post('/', controller_1.default.create)
    .delete('/', controller_1.default.clear)
    .get('/:id', controller_1.default.byId)
    .put('/:id', controller_1.default.update)
    .delete('/:id', controller_1.default.delete);
//# sourceMappingURL=router.js.map