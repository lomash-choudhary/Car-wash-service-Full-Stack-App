import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";
import { userSignUpValidator } from "../validators/user.validator";
import { client } from "../db/connectToDB";
import { capitalizeFirstName } from "../helper/capitalizeFirstName.helper";

const signup = asyncHandler(
    async(req:Request, res:Response) => {
        const {fullName, username, password} = req.body
        if(!fullName || !password || !username){
            throw new ApiError({
                statusCode: 400,
                message: "Please enter all the details",
                error: "Input fields missing",
                success: false
            })
        }

        const validatedData = userSignUpValidator.safeParse(req.body)

        if(!validatedData.success){
            const errorMessage = validatedData.error.issues[0]?.message
            throw new ApiError({
                statusCode: 400,
                message: errorMessage || "Something went wrong",
                error: "Input fields missing",
                success: false
            })
        }

        const doesUserAlreadyExists = await client.user.findFirst({
            where:{
                username
            }
        })

        if(doesUserAlreadyExists){
            throw new ApiError({
                statusCode: 400,
                message: "Username already taken",
                error: "Username already taken",
                success: false
            })
        }
        const correctName = capitalizeFirstName(fullName)
        const createUser = await client.user.create({
            data:{
                username: username.toLowerCase(),
                password: password,
                fullName: correctName
            }
        })
        console.log("create user",createUser)
        if(!createUser){
            throw new ApiError({
                statusCode: 500,
                message: "Error occured while creating account, Please try again later",
                error: "SignUp Error",
                success: false
            })
        }

        return res.status(200).json(
            new ApiResponse({
                statusCode: 200,
                data:{},
                message:"Account Created successfully"
            })
        )

    }
)

export {
    signup
}