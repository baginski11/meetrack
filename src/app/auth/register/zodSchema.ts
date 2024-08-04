import {z} from "zod";

const registerSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must have least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must have least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }).email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 7 characters.",
    }),

})



export { registerSchema }