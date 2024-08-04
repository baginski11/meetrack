"use client"
import {Lock} from "lucide-react";
import SocialLoginButton from "@/components/SocialLoginButton";
import Separator from "@/components/Separator";
import {Input} from "@/components/Input";
import {Button} from "@/components/Button";
import Link from "next/link";
import {loginSchema} from "@/app/auth/login/zodSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/Form";
import {useState} from "react";
import {Badge} from "@/components/Badge";
import Card from "@/components/Card";
import {Typography} from "@/components/Typography";


export default function Page() {


    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })


    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        setLoading(true)
        console.log(values)
        setTimeout(() => {
            setLoading(false)}, 5000)

    }



    return (
        <Card className="rounded-16 p-6 min-w-96 ">
            <div className="flex flex-col justify-center items-center gap-4 self-stretch ">
                <div className="flex items-center justify-center p-3 rounded-full bg-green-alpha-24">
                    <Lock className="text-green-500 w-6 h-6"/>
                </div>
                <div className='flex flex-col'>
                    <Typography variant='titleH6' className='text-center font-semibold text-text-Strong'>Welcome Back!</Typography>
                    <Typography variant='paragraphS' className='text-center text-text-Sub'>Please enter
                        your details to continue.</Typography>
                </div>
                <SocialLoginButton variant={'linkedin'}/>
                <div className='w-full flex flex-row gap-2 items-center'>
                    <Separator direction='horizontal'/>
                    <Typography variant='labelXS' className='text-text-Sub'>OR</Typography>
                    <Separator direction='horizontal'/>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full'>




                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input label="Email Address" placeholder="someone@example.com" type='email' {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input label="Password" placeholder="• • • • • • • • • • " type='password' {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                <Button loading={loading} type="submit" className='w-full'>Continue</Button>

                    </form>
                </Form>

                <Typography variant='paragraphS' className='text-text-Sub font-medium'>Don't have an account yet? <Link href='/auth/register' className='text-text-Strong hover:underline cursor-pointer'>Register</Link> </Typography>
            </div>
        </Card>
    )
}