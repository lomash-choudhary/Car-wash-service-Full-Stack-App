import type {Request, Response, NextFunction} from "express"

const asyncHandler = (fn: Function) => async(req:Request, res:Response, next:NextFunction) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        next(error) //if any async functin fails then this will call our errorhandler middleware
    }
}

export{
    asyncHandler
}