import L from '../../common/logger.js';
import { ObjectId, } from 'mongodb';
import { BaseService } from './base.service.js';
export class MemoService extends BaseService {
    databaseName = 'memos';
    collectionName = '_views';
    /** すべてのデータを取得する */
    async all() {
        L.info('fetch all memo');
        return super.all();
    }
    /** ID指定取得（Memo固有の accessCount を +1） */
    async byId(id) {
        L.info(`fetch memo with id ${id}`);
        const collection = await this.getCollection();
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
            $inc: { accessCount: 1 },
        };
        // 'after'書き換え直後のドキュメントを返します。
        return await collection.findOneAndUpdate(filter, updateDoc, {
            returnDocument: 'after',
        });
    }
    /** 新規作成（Memo固有のカウントを 0 で初期化） */
    async create(body) {
        L.info('create memo');
        const docsWithCount = body.map((item) => ({
            ...item,
            accessCount: 0,
            updateCount: 0,
        }));
        return super.create(docsWithCount);
    }
    /** 全体更新（既存の accessCount を維持し updateCount を +1） */
    async update(id, body) {
        L.info(`update memo with id ${id}`);
        const existing = await super.byId(id);
        if (!existing) {
            return null;
        }
        const { accessCount, updateCount, ...restBody } = body;
        void accessCount;
        void updateCount;
        return super.update(id, {
            ...restBody,
            accessCount: existing.accessCount ?? 0,
            updateCount: (existing.updateCount ?? 0) + 1,
        });
    }
    /** 部分更新（updatedAt の更新と updateCount の +1 を1回の updateOne で実行） */
    async partialUpdate(id, body) {
        L.info(`partial update memo with id ${id}`);
        const { accessCount, updateCount, ...restBody } = body;
        void accessCount;
        void updateCount;
        return super.partialUpdate(id, restBody, {
            $inc: { updateCount: 1 },
        });
    }
    // メモを削除する
    async delete(id) {
        L.info(`delete memo with id ${id}`);
        return super.delete(id);
    }
    // すべてのメモを削除する
    async clear() {
        L.info('clear memo');
        return super.clear();
    }
}
export default new MemoService();
//# sourceMappingURL=memo.service.js.map