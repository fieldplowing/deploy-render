"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const memo_service_1 = __importDefault(require("../../services/memo.service"));
class Controller {
    all(_, res) {
        memo_service_1.default.all().then((r) => res.status(200).json(r));
    }
    byId(req, res) {
        const id = Number.parseInt(req.params['id']);
        memo_service_1.default.byId(id).then((r) => {
            if (r)
                res.json(r);
            else
                res.status(404).end();
        });
    }
    create(req, res) {
        memo_service_1.default.create(req).then((r) => {
            if (r)
                res.status(201).json(r);
            else
                res.status(404).end();
        });
    }
    update(req, res) {
        memo_service_1.default.update(req).then((r) => {
            if (r)
                res.status(201).json(r);
            else
                res.status(404).end();
        });
    }
    delete(req, res) {
        const id = Number.parseInt(req.params['id']);
        memo_service_1.default.delete(id).then((r) => {
            if (r)
                res.json(r);
            else
                res.status(404).end();
        });
    }
}
exports.Controller = Controller;
exports.default = new Controller();
//# sourceMappingURL=controller.js.map