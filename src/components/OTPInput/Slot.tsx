import {cn} from "@/utils/cn";
import {SlotProps} from "input-otp";
import {Typography} from "@/components/Typography";


function FakeCaret() {
    return (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
            <div className="w-px h-8 bg-background-White" />
        </div>
    )
}


export default function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                'relative w-10 h-14 text-[2rem] text-background-Strong',
                'flex items-center justify-center',
                'transition-all duration-100',
                'border-stroke-Soft border-y border-r first:border-l first:rounded-l-10 last:rounded-r-10',
                'group-hover:border-stroke-Soft',
                'outline outline-0 outline-stroke-Soft ',
                { 'outline-2 outline-stroke-Soft': props.isActive },
            )}
        >
            {props.char !== null && <Typography variant='labelL'>{props.char}</Typography>}
            {props.hasFakeCaret && <FakeCaret />}
        </div>
    )
}