import {PropsWithChildren} from "react";


export default function Layout(props: PropsWithChildren) {
    const { children } = props;

    return(
        <main className="w-dvw h-dvh flex items-center justify-center bg-background-White">
            {children}
        </main>
    )
}