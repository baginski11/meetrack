import * as React from "react"
import {facebookIcon, linkedinIcon} from "@/utils/socialIcons";


type SocialVariant = "linkedin" | "facebook"


type SocialVariantsType = {
    [key: SocialVariant]: {
        icon: () => React.JSX.Element
        name: string
    }
}




const socialVariants: SocialVariantsType = {
    "linkedin": {
        icon: linkedinIcon,
        name: "LinkedIn",
    },
    "facebook": {
        icon: facebookIcon,
        name: "Facebook",
    },
}

interface SocialLoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: SocialVariant
}


export default function SocialLoginButton(props: SocialLoginButtonProps) {
    const {variant, ...restProps} = props

    const Icon = socialVariants[variant].icon

    return (
        <button
            className="w-full rounded-10 py-1 inline-flex items-center justify-center whitespace-nowrap border-stroke-Soft border gap-3 transition-all hover:border-primary-Base ">
            <Icon/>
            <h1 className='text-center text-sm font-medium leading-7 tracking-tight text-text-Strong'>Continue
                with {socialVariants[variant].name}</h1>
        </button>

    )
}