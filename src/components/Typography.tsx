import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"

// #ts-nocheck
// @ts-ignore
const typographyVariants = cva(
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-text-Strong text-center",
    {
        variants: {
            variant: {
                titleH1: "font-medium text-[56px] tracking-tighter leading-[64px]",
                titleH2: "font-medium text-[48px] tracking-tighter leading-[56px]",
                titleH3: "font-medium text-[40px] tracking-tighter leading-[48px]",
                titleH4: "font-medium text-[32px] tracking-tight leading-[40px]",
                titleH5: "font-medium text-[24px] leading-[32px]",
                titleH6: "font-medium text-[20px] leading-[28px]",
                labelXL: "font-medium text-[24px] leading-[32px] tracking-tighter",
                labelL: "font-medium text-[18px] leading-[24px] tracking-tighter",
                labelM: "font-medium text-[16px] leading-[24px] tracking-tighter",
                labelS: "font-medium text-[14px] leading-[20px] tracking-tight",
                labelXS: "font-medium text-[12px] leading-[16px] tracking-tight",
                paragraphXL: "font-normal text-[24px] leading-[32px] tracking-tighter",
                paragraphL: "font-normal text-[18px] leading-[24px] tracking-tighter",
                paragraphM: "font-normal text-[16px] leading-[24px] tracking-tight",
                paragraphS: "font-normal text-[14px] leading-[20px] tracking-tight",
                paragraphXS: "font-normal text-[12px] leading-[16px]",
                subHeadingM: "font-medium text-[16px] leading-[24px] tracking-wider",
                subHeadingS: "font-medium text-[14px] leading-[20px] tracking-wider",
                subHeadingXS: "font-medium text-[12px] leading-[16px] tracking-wide",






            },
        },
        defaultVariants: {
            variant: "labelM",
        },
    }
)

export interface TypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof typographyVariants> {}

function Typography({ className, variant, ...props }: TypographyProps) {
    return (
        <h1 className={cn(typographyVariants({ variant }), className)} {...props} />
    )
}

export { Typography, typographyVariants }
