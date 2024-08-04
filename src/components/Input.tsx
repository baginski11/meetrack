import * as React from "react"

import { cn } from "@/utils/cn"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    valid?: boolean
    errorMessage?: string
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,label, errorMessage, valid = true, ...props }, ref) => {
    return (
        <div className="space-y-1">
            {label && <h1 className="text-sm leading-5 tracking-tight text-text-Strong  font-medium">{label}</h1>}
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-8 font-medium caret-primary-Base border border-stroke-Soft ring-offset-background-White text-text-Strong bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-Sub/90 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-2",
          className,
          !valid && "!border-error-Base"
        )}
        ref={ref}
        {...props}
      />
      {errorMessage && !valid && <p className="text-error-Base text-xs">{errorMessage}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
