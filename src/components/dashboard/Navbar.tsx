"use client"
import {Calendar, LayoutDashboard, Lock, Settings, Users} from "lucide-react";
import {Typography} from "@/components/Typography";
import Separator from "@/components/Separator";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/Select";
import NavbarLink from "@/components/dashboard/NavbarLink";
import NavbarGroupLink from "@/components/dashboard/NavbarGroupLink";
import {AvatarImage, AvatarFallback, Avatar} from "@/components/dashboard/Avatar";
import {Button} from "@/components/Button";
import {usePathname, useRouter} from "next/navigation";
import {useOrganizationContext} from "@/contexts/OrganizationContext";
import {useOrganizationListContext} from "@/contexts/OrganizationListContext";
import ProPlanBanner from "@/components/ProPlanBanner";



export default function Navbar() {
    const pathName = usePathname()
    const router = useRouter()
    const { organization, updateOrganization} = useOrganizationContext()
    const { organizations } = useOrganizationListContext()

    return(
        <aside className='left-0 py-3 h-full w-fit min-w-60 border-r border-stroke-Soft flex flex-col gap-2'>
            <div className='px-4 flex flex-col gap-2'>


                <div className='w-full p-3 flex flex-row gap-3 items-center justify-center'>
                    <Lock className='h-4 w-4 text-primary-Base'/>
                    <div className='flex flex-col items-start'>
                        <Typography variant='labelS' className='font-semibold text-text-Strong'>{organization.name}</Typography>
                        <Typography variant='labelXS' className='font-medium text-text-Sub'></Typography>

                    </div>
                    <Select onValueChange={(value) => {
                        const selectedOrg = organizations.find(org => org.id === value);
                        if (selectedOrg) {
                            updateOrganization(selectedOrg);
                            router.push(`/${selectedOrg.name}/dashboard`)
                        }
                    }} defaultValue={organization.name}>
                        <SelectTrigger className='w-min !px-1 py-1 h-min'>

                        </SelectTrigger>
                        <SelectContent >
                            {organizations.map((org) => (
                                <SelectItem key={org.id} value={org.id}>{org.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Separator direction='horizontal'/>
            </div>


            <div className='h-full flex flex-col justify-between'>


            <div className='flex flex-col gap-3'>


            <div className='flex flex-col gap-3 p-3'>
                <div className='w-full px-2 flex items-start '>
                    <Typography variant='subHeadingXS' className='text-text-Soft font-medium uppercase'>Organization</Typography>
                </div>
                <NavbarLink title='Dashboard' icon={LayoutDashboard} href={`/${organization.name}/dashboard`} isActive={pathName == `/${organization.name}/dashboard`}/>
                <NavbarLink title='Groups' icon={Users} href={`/${organization.name}/dashboard/groups`} isActive={pathName == `/${organization.name}/dashboard/groups`}/>
                <NavbarLink title='Calendar' icon={Calendar} href={`/${organization.name}/dashboard/calendar`} isActive={pathName == `/${organization.name}/dashboard/calendar`}/>
                <NavbarLink title='Settings' icon={Settings} href={`/${organization.name}/dashboard/settings`} isActive={pathName == `/${organization.name}/dashboard/settings`}/>

            </div>


            <div className='flex flex-col gap-3 p-3'>
                <div className='w-full px-2 flex items-start '>
                    <Typography variant='subHeadingXS'
                                className='text-text-Soft font-medium uppercase'>Groups</Typography>
                </div>
                <NavbarGroupLink title='Maly Wroclaw' color={'bg-neutral-500'} href='#' />
                <NavbarGroupLink title='Maly Wroclaw' color={'bg-sky-500'} href='#' />
                <NavbarGroupLink title='Maly Wroclaw' color={'bg-purple-500'} href='#' />
                <NavbarGroupLink title='Maly Wroclaw' color={'bg-green-500'} href='#' />

            </div>
            </div>


                <div className='w-full p-3'>


                        <ProPlanBanner isShown={true} />


                    <div className='w-full flex flex-row items-center p-3 gap-2 '>

                        <Avatar>
                            <AvatarImage src="https://.com/shadcn.png"/>
                            <AvatarFallback>MB</AvatarFallback>
                        </Avatar>
                        <Typography variant='labelM' className='text-background-Surface font-medium'>Maciej
                            Baginski</Typography>
                    </div>


                </div>


            </div>


        </aside>
    )
}