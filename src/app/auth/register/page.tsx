"use client"
import {Lock} from "lucide-react";
import SocialLoginButton from "@/components/SocialLoginButton";
import Separator from "@/components/Separator";
import {Input} from "@/components/Input";
import {Button} from "@/components/Button";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "@/app/auth/register/zodSchema";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/Form";
import Card from "@/components/Card";
import {Typography} from "@/components/Typography";


export default function Page() {

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    })


    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        console.log(values)
    }



    return (
        <Card className="bg-background-White rounded-10 p-6 min-w-80">
            <div className="flex flex-col justify-center items-center gap-4 self-stretch">
                    <div className="flex items-center justify-center p-3 rounded-full bg-green-alpha-24">
                        <Lock className="text-green-500 w-6 h-6"/>
                    </div>
                <div className='flex flex-col'>
                    <Typography variant='titleH6' className="text-center font-semibold text-text-Strong">Create
                        an account</Typography>
                    <Typography variant='paragraphS' className="text-center text-text-Sub">Please enter
                        your details to create an account.</Typography>
                </div>
                <SocialLoginButton variant={'linkedin'}/>
                <div className='w-full flex flex-row gap-2 items-center'>
                    <Separator direction='horizontal'/>
                    <Typography variant='labelXS' className='text-text-Sub'>OR</Typography>
                    <Separator direction='horizontal'/>
                </div>


                <Form {...form}>
                    <form className='w-full flex flex-col gap-3 max-w-80' onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='flex flex-row gap-[10px]'>
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input label="First name" placeholder='John' type='name' {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input label="Last name" placeholder='Doe' type='surname' {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>


                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input label="Email Address" placeholder="someone@example.com" type='email'{...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormControl>
                                        <Input label="Password" placeholder="• • • • • • • • • • " type='password' {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />




                        <Button type="submit" className='w-full'>Continiue</Button>

                    </form>
                </Form>




                <Typography variant='paragraphS' className='text-text-Sub font-medium'>Arleady have an account? <Link href='/auth/login' className='text-text-Strong hover:underline cursor-pointer'>Login</Link></Typography>
            </div>
        </Card>
    )
}