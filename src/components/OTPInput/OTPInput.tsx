"use client"
import Slot from "@/components/OTPInput/Slot";
import {OTPInput} from "input-otp";

function FakeDash() {
    return (
        <div className="flex w-10 justify-center items-center">
            <div className="w-3 h-[2px] rounded-full bg-stroke-Soft" />
        </div>
    )
}

export default function OTP() {


    return(
        <OTPInput
            maxLength={6}
            containerClassName="group flex items-center has-[:disabled]:opacity-30"
            render={({ slots }) => (
                <>
                    <div className="flex">
                        {slots.slice(0, 3).map((slot, idx) => (
                            <Slot key={idx} {...slot} />
                        ))}
                    </div>

                    <FakeDash />

                    <div className="flex">
                        {slots.slice(3).map((slot, idx) => (
                            <Slot key={idx} {...slot} />
                        ))}
                    </div>
                </>
            )}
        />
    )
}