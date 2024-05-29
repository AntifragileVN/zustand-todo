import { Models } from '../types/models.enum';
import { Request, Response, NextFunction } from 'express';
export declare const isExist: (model: Models) => (req: Request, _: Response, next: NextFunction) => Promise<void>;
