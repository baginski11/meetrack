import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"
import {LoaderCircle} from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-Base text-text-White dark:text-text-Strong shadow hover:bg-primary-Darker",
        destructive:
          "bg-error-Base text-background-White shadow-sm hover:bg-error-Base/80",
        outline:
          "border border-primary-Base bg-background-Strong shadow-sm hover:bg-blue-400/30 hover:text-accent-foreground",
        ghost: "bg-blue-400/[0.12] hover:bg-blue-400/[0.24]",
        link: "text-primary-Base underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-[10px]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-5 w-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
    loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading= false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

      if(loading) {
        return (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
              disabled
          >
              <LoaderCircle className='w-5 h-5 animate-spin'/>
          </Comp>)
      }


    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
