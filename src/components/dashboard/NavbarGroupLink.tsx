import Link from "next/link";
import {DashboardIcon} from "@radix-ui/react-icons";
import {Typography} from "@/components/Typography";
import {LayoutDashboard, LucideIcon} from "lucide-react";
import {cn} from "@/utils/cn";


interface NavbarGroupLinkProps {
    title: string;
    color: string;
    href: string;
}


export default function NavbarGroupLink(props: NavbarGroupLinkProps) {
    const {  href,title, color, } = props;

    return(
        <div className={`flex flex-row gap-3 ml-1`}>

            <div className={`w-full flex flex-row gap-2 items-center `}>
                <Link href={href}
                      className={cn('group w-full rounded-8 py-2 px-3 flex flex-row gap-2 justify-between items-center')}>
                    <div className='flex flex-row gap-2 items-center'>
                        <span  className={cn('h-3 w-3 rounded-full', color)}/>
                        <Typography variant='labelS' className={`font-medium text-text-Sub group-hover:text-text-Strong  `}>{title}</Typography>
                    </div>
                </Link>
            </div>
        </div>
    )
}