import {z} from "zod"

const userSignUpValidator = z.object({
    fullName: z
    .string()
    .regex(/^[a-zA-Z]+(?:[-' ]+[a-zA-Z]+)*$/,{
        error:"Please enter a valid full name"
    }),

    password: z
    .string()
    .min(8, {error:"The password should atleast be of 8 characters"})
    .max(20, {error:"The password is too long"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        error:"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    }),

    username: z
    .string()
    .min(1, {error:"Please enter a valid username"})
})

export {
    userSignUpValidator
}