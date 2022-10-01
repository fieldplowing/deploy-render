"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const logger_1 = __importDefault(require("../../../common/logger"));
class Controller {
    check(_, res) {
        logger_1.default.info('checked alive');
        res.status(200).json('checked alive');
    }
}
exports.Controller = Controller;
exports.default = new Controller();
//# sourceMappingURL=controller.js.map