import { ObjectId, } from 'mongodb';
import { getCollection } from '../../common/db.js';
import { getFormattedTimestamp } from '../../common/uty.js';
export class BaseService {
    async getCollection() {
        return (await getCollection(this.databaseName, this.collectionName));
    }
    /** 全件取得（デフォルトで updatedAt 降順） */
    async all(options = { sort: { updatedAt: -1, _id: -1 } }) {
        const collection = await this.getCollection();
        const result = await collection.find({}, options).toArray();
        return result;
    }
    /** ID指定取得 */
    async byId(id) {
        const collection = await this.getCollection();
        const filter = { _id: new ObjectId(id) };
        return (await collection.findOne(filter));
    }
    /** 新規作成（createdAt と updatedAt を自動付与） */
    async create(body) {
        const collection = await this.getCollection();
        const now = getFormattedTimestamp();
        const docsWithTimestamp = body.map((item) => ({
            ...item,
            createdAt: now,
            updatedAt: now,
        }));
        const result = await collection.insertMany(docsWithTimestamp);
        return result.insertedIds[0]?.toString() ?? '';
    }
    /** 全体更新（元の createdAt を維持し、updatedAt のみ更新） */
    async update(id, body) {
        const collection = await this.getCollection();
        const filter = { _id: new ObjectId(id) };
        const existing = await collection.findOne(filter);
        if (!existing) {
            return null;
        }
        const { _id, createdAt, ...restBody } = body;
        void _id;
        void createdAt;
        const now = getFormattedTimestamp();
        const replacement = {
            ...restBody,
            createdAt: existing.createdAt ?? now,
            updatedAt: now,
        };
        await collection.replaceOne(filter, replacement);
        return id;
    }
    /** 部分更新（updatedAt の自動更新 ＋ extraUpdate：オプション） */
    async partialUpdate(id, body, extraUpdate) {
        const collection = await this.getCollection();
        const filter = { _id: new ObjectId(id) };
        const { _id, createdAt, ...restBody } = body;
        void _id;
        void createdAt;
        const updateDoc = {
            ...extraUpdate,
            $set: {
                ...extraUpdate?.$set,
                ...restBody,
                updatedAt: getFormattedTimestamp(),
            },
        };
        const result = await collection.updateOne(filter, updateDoc);
        return result.matchedCount > 0 ? id : null;
    }
    /** 削除 */
    async delete(id) {
        const collection = await this.getCollection();
        const filter = { _id: new ObjectId(id) };
        await collection.deleteOne(filter);
        return id;
    }
    /** 全削除 */
    async clear() {
        const collection = await this.getCollection();
        await collection.deleteMany({});
        return 'clear';
    }
}
//# sourceMappingURL=base.service.js.map