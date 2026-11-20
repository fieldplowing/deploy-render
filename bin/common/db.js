import { MongoClient } from 'mongodb';
import { ServerApiVersion } from 'mongodb';
import L from './logger.js';
const databaseUrl = `mongodb+${process.env.DATABASE_URL}?retryWrites=true&w=majority`;
// 単一のクライアントインスタンスを保持（シングルトン）
const client = new MongoClient(databaseUrl, {
    serverApi: ServerApiVersion.v1,
});
let isConnected = false;
export async function getMongoClient() {
    if (!isConnected) {
        await client.connect();
        isConnected = true;
        L.info('🍃 MongoDB connection pool established globally.');
    }
    return client;
}
/**
 * 指定されたデータベース名とコレクション名のインスタンスを返します
 */
export async function getCollection(dbName, collectionName) {
    const currentClient = await getMongoClient();
    return currentClient.db(dbName).collection(collectionName);
}
//# sourceMappingURL=db.js.map