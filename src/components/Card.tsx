import {PropsWithChildren} from "react";
import {cn} from "@/utils/cn";
import * as React from "react";


export default function Card(props: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    const { className, children } = props;


    return(
        <div className={cn('border-stroke-Soft dark:border-border border-[0.12rem]', className)}>
            {children}
        </div>
    )
}