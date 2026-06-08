export class ApiError extends Error{
    statusCode: number
    data?: any
    error: any
    override stack?: any // since stack already exists in the Error class so we had to override it
    success:boolean
    constructor(params: ApiErrorType){
        // we are calling the parent class constructor
        super(params.message);
        this.statusCode = params.statusCode
        this.error = params.error
        this.data = params.data;
        this.success = params.success;
        if(params.stack){
            // if stack trace is present in the object then this code block will run
            this.stack = params.stack
        }else{
            // otherwise use the node.js generated stack trace 
            Error.captureStackTrace(this, this.constructor) // with this the error starts from the actual error location
        }
    }
}

interface ApiErrorType{
    statusCode: number,
    message: string,
    data?:any
    error: any,
    stack?: any
    success:boolean
}