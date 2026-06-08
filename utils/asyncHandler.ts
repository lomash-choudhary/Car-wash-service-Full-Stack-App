import type { Request, Response, NextFunction } from "express";

const asyncHandler = (fn: Function) => async(req: Request, res:Response, next:NextFunction) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        next(error)
        // if any async function fails then this will call our errorHandler middleware
    }
}

export{
    asyncHandler
}