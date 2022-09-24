"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoService = void 0;
// import J from '../../public/userdata/testId.json';
const logger_1 = __importDefault(require("../../common/logger"));
const mongodb_1 = require("mongodb");
const database_url = process.env.DATABASE_URL || '';
const client = new mongodb_1.MongoClient(database_url, {
    serverApi: mongodb_1.ServerApiVersion.v1,
});
const databaseName = 'memos';
const collectionName = '_views';
// Use This Database
const db = client.db(databaseName);
// Use This Collection
const collection = db.collection(collectionName); // Like Table
// interface Memo {
//   _id: ObjectId;
//   id: number;
//   status: string;
//   category: string;
//   title: string;
//   content: string;
//   accessCount: number;
//   updateCount: number;
//   createdAt: string;
//   updatedAt: string;
// }
class MemoService {
    async all() {
        logger_1.default.info(`fetch all memo`);
        // Connect
        await client.connect();
        // Find Documents
        const findResult = await collection
            .find({})
            .sort({ updatedAt: -1 })
            .toArray();
        // console.log('Found Documents :', findResult);
        client.close();
        return Promise.resolve(findResult);
    }
    async byId(id) {
        logger_1.default.info(`fetch memo with id ${id}`);
        // Connect
        await client.connect();
        // Find Documents
        const findResult = await collection.findOne({ _id: new mongodb_1.ObjectId(id) });
        client.close();
        return Promise.resolve(findResult);
    }
    async create(req) {
        logger_1.default.info(`create memo`);
        // Connect
        await client.connect();
        // Insert Documents
        const result = await collection.insertMany(req.body);
        client.close();
        return Promise.resolve(result.insertedIds[0].toString());
    }
    async update(id, req) {
        logger_1.default.info(`update memo with id ${id}`);
        // Connect
        await client.connect();
        // Update Documents (Like Row)
        await collection.replaceOne({ _id: new mongodb_1.ObjectId(id) }, req.body);
        client.close();
        return Promise.resolve(id);
    }
    async delete(id) {
        logger_1.default.info(`delete memo with id ${id}`);
        // Connect
        await client.connect();
        // Delete Documents (Like Row)
        await collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        client.close();
        return Promise.resolve(id);
    }
    async clear() {
        logger_1.default.info(`clear memo`);
        // Connect
        await client.connect();
        // Delete Documents
        await collection.deleteMany({});
        client.close();
        return Promise.resolve(`clear`);
    }
}
exports.MemoService = MemoService;
exports.default = new MemoService();
//# sourceMappingURL=memo.service.js.map