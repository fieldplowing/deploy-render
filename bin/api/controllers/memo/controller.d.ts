import { Request, Response } from 'express';
export declare class Controller {
    /**
     * メモ一覧の取得 (GET /api/v1/memo)
     */
    all(_req: Request, res: Response): Promise<void>;
    /**
     * ID指定によるメモ取得 (GET /api/v1/memo/:id)
     */
    byId(req: Request, res: Response): Promise<void>;
    /**
     * 新しいメモの作成 (POST /api/v1/memo)
     */
    create(req: Request, res: Response): Promise<void>;
    /**
     * メモの更新 (PUT /api/v1/memo/:id)
     */
    update(req: Request, res: Response): Promise<void>;
    /**
     * メモの部分更新 (PATCH /api/v1/memo/:id)
     */
    partialUpdate(req: Request, res: Response): Promise<void>;
    /**
     * メモの削除 (DELETE /api/v1/memo/:id)
     */
    delete(req: Request, res: Response): Promise<void>;
    /**
     * すべてのメモを削除 (DELETE /api/v1/memo)
     */
    clear(_req: Request, res: Response): Promise<void>;
}
declare const _default: Controller;
export default _default;
