import { Request, Response, NextFunction } from 'express';
type Controller = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
export declare const tryCatch: (ctrl: Controller) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
