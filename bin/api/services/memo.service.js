"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoService = void 0;
const logger_1 = __importDefault(require("../../common/logger"));
// import Data from '../../../test/export.json';
const pg_1 = __importDefault(require("pg"));
const database_url = process.env.DATABASE_URL || '';
const temp = database_url.split('/');
const schema = temp[temp.length - 1];
const pool = new pg_1.default.Pool({
    connectionString: database_url,
    ssl: {
        // require: true,
        rejectUnauthorized: false,
    },
    idleTimeoutMillis: 3 * 86400 * 1000,
});
class MemoService {
    async all() {
        logger_1.default.info(`fetch all with schema ${schema}`);
        let rows = [];
        // コネクション取得
        const client = await pool.connect();
        try {
            // クエリ発行
            // const result: QueryResult = await client.query('SELECT NOW()');
            const result = await client.query('SELECT * FROM memo ORDER BY id');
            rows = result.rows;
        }
        catch (e) {
            logger_1.default.error({ e }, 'fetch all error!!');
        }
        finally {
            // コネクション返却
            client.release();
        }
        return Promise.resolve(rows);
    }
    async byId(id) {
        logger_1.default.info(`fetch memo with id ${id}`);
        let rows = [];
        // コネクション取得
        const client = await pool.connect();
        try {
            // クエリ発行
            const sql = 'SELECT * FROM memo WHERE id = $1';
            const query = { text: sql, values: [id] };
            logger_1.default.debug(query, 'query');
            const result = await client.query(query);
            rows = result.rows;
        }
        catch (e) {
            logger_1.default.error({ e }, 'fetch byId error!!');
        }
        finally {
            // コネクション返却
            client.release();
        }
        return Promise.resolve(rows);
    }
    async create(req) {
        logger_1.default.info(`create memo`);
        // req.bodyから登録データを取得
        // const item: Memo = req.body;
        // const queryColums =
        //   '(status,category,title,content,accessCount,updateCount,createdAt,updatedAt)';
        // const queryValues = ' VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
        const queryText = 'INSERT INTO memo ' +
            '(status,category,title,content,accessCount,updateCount,createdAt,updatedAt) ' +
            'VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
        const queryValues = [
            req.body.status,
            req.body.category,
            req.body.title,
            req.body.content,
            0,
            0,
            req.body.createdAt,
            req.body.updatedAt,
        ];
        logger_1.default.debug(queryText, 'queryText');
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            await client.query(queryText, queryValues);
            await client.query('COMMIT');
        }
        catch (e) {
            await client.query('ROLLBACK');
            logger_1.default.error({ e }, 'create error!!');
        }
        finally {
            client.release();
        }
        return Promise.resolve(req.body);
    }
    async update(req) {
        logger_1.default.info(`update memo with id ${req.body.id}`);
        const queryText = 'UPDATE memo ' +
            'SET status=$1,category=$2,title=$3,content=$4,accessCount=$5,updateCount=$6,updatedAt=$7 ' +
            'WHERE id = $8';
        const queryValues = [
            req.body.status,
            req.body.category,
            req.body.title,
            req.body.content,
            req.body.accessCount,
            req.body.updateCount,
            req.body.updatedAt,
            req.body.id,
        ];
        logger_1.default.debug(queryText, 'queryText');
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            await client.query(queryText, queryValues);
            await client.query('COMMIT');
        }
        catch (e) {
            await client.query('ROLLBACK');
            logger_1.default.error({ e }, 'update error!!');
        }
        finally {
            client.release();
        }
        return Promise.resolve(req.body);
    }
    async delete(id) {
        logger_1.default.info(`delete memo with id ${id}`);
        const sql = 'DELETE FROM memo WHERE id = $1';
        const query = { text: sql, values: [id] };
        logger_1.default.debug(query, 'query');
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            await client.query(query);
            await client.query('COMMIT');
        }
        catch (e) {
            await client.query('ROLLBACK');
            logger_1.default.error({ e }, 'delete error!!');
        }
        finally {
            client.release();
        }
        return Promise.resolve(id);
    }
}
exports.MemoService = MemoService;
exports.default = new MemoService();
//# sourceMappingURL=memo.service.js.map