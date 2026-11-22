import express from 'express';
import path from 'path';
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