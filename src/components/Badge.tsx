import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"

const badgeVariants = cva(
    "inline-flex items-center rounded-8 px-4 py-0.5 text-xs font-semibold ring-1 ring-inset  transition-colors focus:outline-none focus:ring-2 focus:ring-background-White focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary-Base/30 text-primary-Base hover:bg-primary-Base/40 ring-primary-Base/70 ",
                error:
                    "border-transparent bg-error-Base/30 text-error-Base hover:bg-error-Base/40 ring-error-Base/70",
                neutral:
                    "border-transparent bg-neutral-500/30 text-neutral-500 hover:bg-neutral-500/40 ring-neutral-500/70",
                orange: "border-transparent bg-orange-500/30 text-orange-500 hover:bg-orange-500/40 ring-orange-500/70",
                green: "border-transparent bg-green-500/30 text-green-500 hover:bg-green-500/40 ring-green-500/70",
                yellow: "border-transparent bg-yellow-500/30 text-yellow-500 hover:bg-yellow-500/40 ring-yellow-500/70",
                purple: "border-transparent bg-purple-500/30 text-purple-500 hover:bg-purple-500/40 ring-purple-500/70",
                sky: "border-transparent bg-sky-500/30 text-sky-500 hover:bg-sky-500/40 ring-sky-500/70",
                pink: "border-transparent bg-pink-500/30 text-pink-500 hover:bg-pink-500/40 ring-pink-500/70",
                teal: "border-transparent bg-teal-500/30 text-teal-500 hover:bg-teal-500/40 ring-teal-500/70",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
