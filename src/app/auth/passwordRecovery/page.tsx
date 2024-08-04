import {Typography} from "@/components/Typography";
import {Lock, ShieldAlert} from "lucide-react";
import Card from "@/components/Card";
import Separator from "@/components/Separator";
import {Input} from "@/components/Input";
import {Button} from "@/components/Button";


export default function Page() {


    return(
        <Card className='flex flex-col gap-6 p-8 rounded-16 items-center bg-background-White'>
            <div className='flex flex-col gap-2 items-center w-full'>
            <div className='flex items-center justify-center p-3  rounded-full w-min bg-gradient-to-b from-error-Light to-error-Lighter dark:from-error-Light/20 dark:to-error-Lighter/10 '>
                <div className='flex items-center justify-center p-1.5 bg-background-White rounded-full border-stroke-Sub dark:border-border border'>
                    <ShieldAlert className='h-6 w-6 text-error-Base'/>
                </div>
            </div>
                <div className='flex flex-col gap-1'>


            <Typography className='text-text-Strong' variant='titleH5'>Reset Password</Typography>
            <Typography className='text-text-Soft' variant='paragraphM'>Enter your email to reset your password.</Typography>
                </div>


            </div>
            <Separator direction='horizontal'/>

            <div className='w-full flex flex-col gap-6 '>


                <Input className='w-full' label="Email Adress" placeholder='name@meetrack.com'/>

                <Button className='w-full'>Reset password</Button>
                <div className='flex flex-col gap-1'>
                <Typography className='text-text-Soft' variant='paragraphS'>Don't have access anymore?</Typography>
                <Typography variant='labelS' className='underline cursor-pointer'>Contact us</Typography>
                </div>
            </div>
        </Card>
    )
}