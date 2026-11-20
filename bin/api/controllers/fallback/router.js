import express from 'express';
import path from 'path';
// import { fileURLToPath } from 'url';
// 1. ESM環境で安全に __dirname を再現
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// 2. 階層の計算を安全に行う（/server/api/controllers/fallback/ から public まで遡るパス）
// const publicDir = path.resolve(__dirname, '../../../../../public');
// 起動ディレクトリ（deploy-render または apiMemo-MongoDB）直下の public を確実に指定
const publicDir = path.resolve(process.cwd(), 'public');
const router = express.Router();
// 3. すべてのGETリクエスト（/*）を index.html にフォールバックする
// ⭕️ 修正後: アスタリスクの直後にパラメータ名を指定（/*path）
router.get('/*path', (_req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'), (err) => {
        if (err) {
            res.status(404).send('SPA index.html not found.');
        }
    });
});
export default router;
//# sourceMappingURL=router.js.map