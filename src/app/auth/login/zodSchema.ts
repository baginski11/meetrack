import {z} from "zod";

const loginSchema = z.object({
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }).email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 7 characters.",
    }),

})



export { loginSchema }