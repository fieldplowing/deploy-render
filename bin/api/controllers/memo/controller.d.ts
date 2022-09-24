import { Request, Response } from 'express';
export declare class Controller {
    all(_: Request, res: Response): void;
    byId(req: Request, res: Response): void;
    create(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
    clear(_: Request, res: Response): void;
}
declare const _default: Controller;
export default _default;
