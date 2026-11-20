import memoRouter from './api/controllers/memo/router.js';
import healthRouter from './api/controllers/health/router.js';
import fallbackRouter from './api/controllers/fallback/router.js';
export default function routes(app) {
    // 💡 エンドポイント
    app.use('/api/v1/memo', memoRouter);
    app.use('/api/v1/health', healthRouter);
    // 💡 Express 5 で確実に動作するフォールバックルーティング
    app.use('/{*path}', fallbackRouter);
}
//# sourceMappingURL=routes.js.map