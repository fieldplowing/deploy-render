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
        memo_service_1.default.byId(req.params['id']).then((r) => {
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
        memo_service_1.default.update(req.params['id'], req).then((r) => {
            if (r)
                res.status(201).json(r);
            else
                res.status(404).end();
        });
    }
    delete(req, res) {
        memo_service_1.default.delete(req.params['id']).then((r) => {
            if (r)
                res.json(r);
            else
                res.status(404).end();
        });
    }
    clear(_, res) {
        memo_service_1.default.clear().then((r) => {
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