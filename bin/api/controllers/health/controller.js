import L from '../../../common/logger.js';
export class Controller {
    check(_, res) {
        L.info('checked alive');
        res.status(200).json('checked alive');
    }
}
export default new Controller();
//# sourceMappingURL=controller.js.map