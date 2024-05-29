import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
export declare const validateBody: (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
