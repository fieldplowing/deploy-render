import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import os from 'os';
import cors from 'cors';
import * as OpenApiValidator from 'express-openapi-validator';
import l from './logger.js';
import errorHandler from '../api/middlewares/error.handler.js';
const app = express();
// ESM環境で __dirname と root パスを安全に取得する定義
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default class ExpressServer {
    constructor() {
        // 💡 開発時（フロント4200番と別起動する時）のみCORSを有効化
        if (process.env.NODE_ENV !== 'production') {
            app.use(cors({
                origin: 'http://127.0.0.1:4200', //アクセス許可するオリジン👈 フロントエンドのURL
                credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加👈 ログイン情報
                optionsSuccessStatus: 200, //レスポンスstatusを200に設定
            }));
        }
        // 💡 Pinoによる簡易リクエストログ記録
        app.use((req, _res, next) => {
            l.info({ method: req.method, url: req.url }, 'Incoming Request');
            next();
        });
        // 💡 改善：body-parser を排除し、Express 5 標準のパーサーを使用
        const requestLimit = process.env.REQUEST_LIMIT || '100kb';
        app.use(express.json({ limit: requestLimit }));
        app.use(express.urlencoded({ extended: true, limit: requestLimit }));
        app.use(express.text({ limit: requestLimit }));
        // 静的ファイルの配信設定（deploy-render/public または apiMemo-MongoDB/public を確実に指す）
        app.use(express.static(path.resolve(process.cwd(), 'public')));
        // OpenAPI Validator の設定
        const apiSpec = path.join(__dirname, 'api.yml'); // server/common/api.yml を正確に指定
        const validateResponses = !!(process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION &&
            process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION.toLowerCase() === 'true');
        app.use(OpenApiValidator.middleware({
            apiSpec,
            validateRequests: true,
            validateResponses,
            // バリデーションを除外したいパスを正規表現、または関数で指定
            // 今回は /health や静的ファイル（public）などを弾くため、/api/v1 以外を除外
            // /api/v1/health へのアクセスのみバリデーションをスキップする
            // ignorePaths: (p: string) => !p.startsWith('/api/v1'),
            ignorePaths: (p) => p === '/api/v1/health' || !p.startsWith('/api/v1'),
        }));
    }
    router(routes) {
        routes(app);
        // エラーハンドラーをルーティングの直後に配置（Express 5でも必須）
        app.use(errorHandler);
        return this;
    }
    listen(port) {
        const welcome = (p) => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);
        http.createServer(app).listen(port, welcome(port));
        return app;
    }
}
//# sourceMappingURL=server.js.map