"use client"

import {Typography} from "@/components/Typography";
import {Button} from "@/components/Button";
import {useState} from "react";
import {X} from "lucide-react";
import AnimateHeight, {Height} from "react-animate-height";

interface ProPlanBannerProps {
    isShown: boolean;
}

export default function ProPlanBanner(props: ProPlanBannerProps) {
    const { isShown: isShownProp} = props
    const [isShown, setIsShown] = useState<boolean>(isShownProp)
    const [height,setHeight] = useState<Height>('auto')


    const onClose = () => {
        setHeight(0)
        setIsShown(false)
    }


    return (
        <AnimateHeight className='w-fit' height={height} duration={300} easing="ease-in-out" id="pro-plan-banner">
        <div className='flex flex-col gap-2 w-fit h-fit bg-gradient-to-b from-purple-300 to-purple-800 rounded-10 p-3 items-start '>
            <div className='flex flex-row justify-between w-full items-center'>
                <Typography variant='labelM' className='text-neutral-0'>Meetrack PRO</Typography>

                <Button variant='default' className='bg-transparent hover:bg-transparent shadow-none ' size='icon' onClick={onClose}>
                    <X className='h-4 w-4 text-neutral-0'/>
                </Button>

            </div>
            <Typography variant='paragraphXS'
                        className='text-wrap w-fit max-w-48 text-left text-neutral-0'>Experience the
                best team management with Meetrack PRO</Typography>

            <Button variant='default' size='sm' className='w-full bg-feature-Dark hover:bg-purple-800'>Pricing</Button>
        </div>
        </AnimateHeight>
    )
}