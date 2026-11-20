import { Request, Response, NextFunction } from 'express';
export default function errorHandler(err: unknown, // 💡 any から unknown に変更
req: Request, res: Response, _next: NextFunction): void;
