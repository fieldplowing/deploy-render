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
export declare class UserService {
    all(): Promise<string[]>;
    select(id: string): Promise<Memo[]>;
    create(req: Request): Promise<string>;
    delete(id: string): Promise<string>;
}
declare const _default: UserService;
export default _default;
