"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("../../common/logger"));
// const Dir = './public/userdata';
const Dir = path_1.default.normalize(__dirname + '/../../public/userdata');
class UserService {
    async all() {
        logger_1.default.info('read all user-data name');
        // ディレクトリが存在することを確認（存在しない場合は、作成）
        (0, fs_extra_1.ensureDirSync)(Dir);
        // ファイル名一覧を取得
        let dirList = new Array();
        try {
            dirList = (0, fs_extra_1.readdirSync)(Dir, {
                withFileTypes: true,
            }).filter(dirent => dirent.isFile())
                .map(dirent => dirent.name);
        }
        catch (err) {
            logger_1.default.debug(err.message);
        }
        return Promise.resolve(dirList);
    }
    async select(id) {
        logger_1.default.info(`read user-data with id ${id}`);
        // 配列データを初期化
        let rows = [{ id: 0, title: 'dummy' }];
        // ファイルが存在することを確認（存在しない場合は、作成）
        // ensureFileSync(`${Dir}/${id}.json`);
        if (!(0, fs_extra_1.existsSync)(`${Dir}/${id}.json`)) {
            logger_1.default.debug(`write default user-data with id ${id}`);
            (0, fs_extra_1.outputJsonSync)(`${Dir}/${id}.json`, rows);
        }
        rows = (0, fs_extra_1.readJsonSync)(`${Dir}/${id}.json`);
        return Promise.resolve(rows);
    }
    async create(req) {
        logger_1.default.info(`create user-data with id ${req.params['id']}`);
        (0, fs_extra_1.outputJsonSync)(`${Dir}/${req.params['id']}.json`, req.body);
        return Promise.resolve(req.params['id']);
    }
    async delete(id) {
        logger_1.default.info('delete user-data with id ${id}');
        try {
            (0, fs_extra_1.remove)(`${Dir}/${id}.json`);
        }
        catch (err) {
            logger_1.default.debug(err.message);
        }
        return Promise.resolve(id);
    }
}
exports.UserService = UserService;
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map