import { HttpError } from 'express-openapi-validator/dist/framework/types.js';
import { pino } from 'pino';
const logger = pino();
export default function errorHandler(err, // 💡 any から unknown に変更
req, res, _next // 💡 必須：第4引数に next を追加（Expressにエラーハンドラーだと認識させるため）
) {
    // express-openapi-validator のエラーインスタンスか、または status を持つオブジェクトか判定
    const isValidationError = err instanceof HttpError ||
        (typeof err === 'object' && err !== null && 'errors' in err);
    // 安全なキャスト処理
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error = err;
    // 1. エラーのステータスコードを決定
    const statusCode = isValidationError
        ? error.status || 400
        : error.status || error.statusCode || 500;
    // 2. クライアントに返却するエラーメッセージの整形（api.ymlの定義に準拠）
    const errorResponseBody = {
        code: statusCode,
        message: isValidationError
            ? 'リクエストのバリデーションに失敗しました。'
            : error.message || 'Internal Server Error',
    };
    // バリデーションエラーの詳細（errors配列）があれば、api.ymlの形式にマッピングして追加
    if (isValidationError && Array.isArray(error.errors)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        errorResponseBody.errors = error.errors.map((e) => ({
            path: e.path || '',
            message: e.message || '',
        }));
    }
    // 3. Pinoロガーを使ったエラーの構造化記録
    if (statusCode >= 500) {
        logger.error({
            msg: '🔥 [Internal Server Error]',
            error: {
                message: error.message,
                stack: error.stack,
            },
            request: {
                method: req.method,
                url: req.url,
                body: req.body,
            },
        });
        if (process.env.NODE_ENV === 'production') {
            errorResponseBody.message =
                'サーバー内部で予期せぬエラーが発生しました。';
        }
    }
    else {
        // 💡 バリデーションエラーを含む 400系クライアントエラーのロギング
        logger.warn({
            msg: `⚠️ [Client Error] ${req.method} ${req.url}`,
            status: statusCode,
            message: error.message,
            errors: errorResponseBody.errors || error.errors,
        });
    }
    // 4. レスポンスの返却
    res.status(statusCode).json(errorResponseBody);
}
//# sourceMappingURL=error.handler.js.map