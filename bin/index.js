import './common/env.js';
import Server from './common/server.js';
import routes from './routes.js';
const port = parseInt(process.env.PORT ?? '3000', 10);
// インスタンス化してルーティングを適用し、指定ポートで起動
export default new Server().router(routes).listen(port);
//# sourceMappingURL=index.js.map