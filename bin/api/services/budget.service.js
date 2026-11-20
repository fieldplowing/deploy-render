import L from '../../common/logger.js';
import { getCollection } from '../../common/db.js';
const databaseName = 'budgets'; // 💡 ToDoとは明確にDBを分離
const collectionName = 'transactions'; // 💡 コレクション名（収支データ）
export class BudgetService {
    async getCollection() {
        return await getCollection(databaseName, collectionName);
    }
    // 例：すべての家計簿データを取得する
    async all() {
        L.info('fetch all budget transactions');
        const collection = await this.getCollection();
        return (await collection.find({}).sort({ date: -1 }).toArray());
    }
    // 例：収支データを1件登録する
    async create(req) {
        L.info('create budget transaction');
        const collection = await this.getCollection();
        // 💡 リクエストボディの構造チェックは OpenAPI Validator が行うため、ここでは直接保存可能
        const result = await collection.insertOne(req.body);
        return result.insertedId.toString();
    }
}
export default new BudgetService();
//# sourceMappingURL=budget.service.js.map