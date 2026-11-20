import { OptionalUnlessRequiredId } from 'mongodb';
import { BaseDocument, BaseService } from './base.service.js';
export interface Memo extends BaseDocument {
    title: string;
    content: string;
    status?: string;
    category?: string;
    accessCount?: number;
    updateCount?: number;
}
export declare class MemoService extends BaseService<Memo> {
    protected readonly databaseName = "memos";
    protected readonly collectionName = "_views";
    /** すべてのデータを取得する */
    all(): Promise<Memo[]>;
    /** ID指定取得（Memo固有の accessCount を +1） */
    byId(id: string): Promise<Memo | null>;
    /** 新規作成（Memo固有のカウントを 0 で初期化） */
    create(body: OptionalUnlessRequiredId<Memo>[]): Promise<string>;
    /** 全体更新（既存の accessCount を維持し updateCount を +1） */
    update(id: string, body: Partial<Memo>): Promise<string | null>;
    /** 部分更新（updatedAt の更新と updateCount の +1 を1回の updateOne で実行） */
    partialUpdate(id: string, body: Partial<Memo>): Promise<string | null>;
    delete(id: string): Promise<string>;
    clear(): Promise<string>;
}
declare const _default: MemoService;
export default _default;
