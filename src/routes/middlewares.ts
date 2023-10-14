import { NextFunction, Request, Response } from "express";
import { validateBody } from "../utils/validateBody.js";

export function validationMiddleware<T>(schema: T) {
    return (req: Request, res: Response, next: NextFunction) => {
        const errors = validateBody(schema, req.body);
        if (errors.length) {
            res.send(errors).status(400);
        } else {
            next();
        }
    };
}
