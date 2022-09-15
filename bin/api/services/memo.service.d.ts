import { Request } from 'express';
interface Memo {
    id: number;
    status: string;
    category: string;
    title: string;
    content: string;
    accessCount: number;
    updateCount: number;
    createdAt: string;
    updatedAt: string;
}
export declare class MemoService {
    all(): Promise<Memo[]>;
    byId(id: number): Promise<Memo[]>;
    create(req: Request): Promise<Memo>;
    update(req: Request): Promise<Memo>;
    delete(id: number): Promise<number>;
}
declare const _default: MemoService;
export default _default;
