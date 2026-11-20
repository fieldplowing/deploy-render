import MemoService from '../../services/memo.service.js';
export class Controller {
    /**
     * メモ一覧の取得 (GET /api/v1/memo)
     */
    async all(_req, res) {
        const result = await MemoService.all();
        res.status(200).json(result);
    }
    /**
     * ID指定によるメモ取得 (GET /api/v1/memo/:id)
     */
    async byId(req, res) {
        const { id } = req.params;
        const result = await MemoService.byId(id);
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).end();
        }
    }
    /**
     * 新しいメモの作成 (POST /api/v1/memo)
     */
    async create(req, res) {
        // 💡 express-openapi-validator により req.body の中身は検証済み
        const id = await MemoService.create(req.body);
        res.status(201).json(id);
    }
    /**
     * メモの更新 (PUT /api/v1/memo/:id)
     */
    async update(req, res) {
        const { id } = req.params;
        const updatedId = await MemoService.update(id, req.body);
        if (updatedId) {
            // 💡 api.yml の成功レスポンス定義（201 または 200）に合わせて返却
            res.status(201).json(id);
        }
        else {
            res.status(404).end();
        }
    }
    /**
     * メモの部分更新 (PATCH /api/v1/memo/:id)
     */
    async partialUpdate(req, res) {
        const { id } = req.params;
        const updatedId = await MemoService.partialUpdate(id, req.body);
        if (updatedId) {
            res.status(200).json(id);
        }
        else {
            res.status(404).json({ code: 404, message: 'リソースが見つかりません' });
        }
    }
    /**
     * メモの削除 (DELETE /api/v1/memo/:id)
     */
    async delete(req, res) {
        const { id } = req.params;
        const result = await MemoService.delete(id);
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.status(404).end();
        }
    }
    /**
     * すべてのメモを削除 (DELETE /api/v1/memo)
     */
    async clear(_req, res) {
        const result = await MemoService.clear();
        res.status(200).json(result);
    }
}
export default new Controller();
//# sourceMappingURL=controller.js.map