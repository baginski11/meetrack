import Link from "next/link";
import {DashboardIcon} from "@radix-ui/react-icons";
import {Typography} from "@/components/Typography";
import {LayoutDashboard, LucideIcon} from "lucide-react";
import {cn} from "@/utils/cn";


interface NavbarLinkProps {
    title: string;
    icon: LucideIcon;
    href: string;
    isActive: boolean;
}


export default function NavbarLink(props: NavbarLinkProps) {
    const { isActive, href,title, icon: Icon } = props;

    return(
        <div className={` relative flex flex-row gap-3 ml-1 ${isActive && "-ml-3"} items-center`}>
            {isActive && <div className='h-[calc(100%-12px)] -left-4 absolute rounded-r-full w-1 bg-feature-Base animate-height-in'></div>}

    <div className={`w-full flex flex-row gap-2 items-center ${isActive && ""}`}>
            <Link href={href}
                  className={cn('group w-full rounded-8 py-2 px-3 flex flex-row gap-2 justify-between items-center', isActive && "bg-background-Weak")}>
                <div className='flex flex-row gap-2 items-center'>
                    <Icon className={`h-4 text-text-Sub transition-all  ${isActive ? "text-feature-Base" : "group-hover:text-text-Strong"}`}/>
                    <Typography variant='labelS' className={`font-medium text-text-Sub group-hover:text-text-Strong  ${isActive && "text-background-Strong"}`}>{title}</Typography>
                </div>
            </Link>
        </div>
        </div>
    )
}