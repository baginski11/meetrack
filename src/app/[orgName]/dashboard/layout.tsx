import {PropsWithChildren} from "react";
import Navbar from "@/components/dashboard/Navbar";
import {OrganizationContextProvider} from "@/contexts/OrganizationContext";
import {OrganizationListContextProvider} from "@/contexts/OrganizationListContext";


interface LayoutProps extends PropsWithChildren {
    params: {
        orgName: string;
    }
}



export default async function Layout(props: LayoutProps) {
    const { params, children } = props;
    const orgName = params.orgName



    return(
        <main className='flex flex-row w-dvw h-dvh bg-background-White'>
            <OrganizationListContextProvider organizations={[
                {
                    name: "SPRBOR",
                    id: "1"
                },
                {
                    name: "RDZPIT",
                    id: "2",
                },
                {
                    name: "SPRCOR",
                    id: "3"
                }
            ]}>


            <OrganizationContextProvider organization={{
                name: orgName,
                id: "1"
            }}>
                <Navbar/>
                {children}
            </OrganizationContextProvider>
            </OrganizationListContextProvider>


        </main>
    )
}