import { Request } from 'express';
export declare class MemoService {
    all(): Promise<any[]>;
    byId(id: string): Promise<any>;
    create(req: Request): Promise<string>;
    update(id: string, req: Request): Promise<string>;
    delete(id: string): Promise<string>;
    clear(): Promise<string>;
}
declare const _default: MemoService;
export default _default;
