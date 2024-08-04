import OTP from "@/components/OTPInput/OTPInput";
import Card from "@/components/Card";
import {MailCheck, ShieldAlert} from "lucide-react";
import {Typography} from "@/components/Typography";
import Separator from "@/components/Separator";
import {Input} from "@/components/Input";
import {Button} from "@/components/Button";


export default function Page(){
    return(
        <Card className='flex flex-col gap-6 p-8 rounded-16 items-center bg-background-White'>
            <div className='flex flex-col gap-2 items-center w-full'>
                <div
                    className='flex items-center justify-center p-3 rounded-full w-min bg-gradient-to-b from-success-Base to-success-Light'>
                    <div
                        className='flex items-center justify-center p-1.5 bg-background-White rounded-full border-stroke-Sub dark:border-border border'>
                        <MailCheck className='h-6 w-6 text-success-Base'/>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>


                    <Typography className='text-text-Strong' variant='titleH5'>Enter verification code</Typography>
                    <Typography className='text-text-Soft' variant='labelS'>We've sent a code to <span className='text-text-Sub'>{'name@meetrack.com'}</span></Typography>
                </div>


            </div>
            <Separator direction='horizontal'/>

            <div className='w-full flex flex-col gap-6 '>


                <OTP/>

                <Button className='w-full'>Submit code</Button>
                <div className='flex flex-col gap-1'>
                    <Typography className='text-text-Soft' variant='paragraphS'>Didn't get the code?</Typography>
                    <Typography variant='labelS' className='underline cursor-pointer'>Resend code</Typography>
                </div>
            </div>
        </Card>
    )
}