import {Typography} from "@/components/Typography";
import {Button} from "@/components/Button";
import {Plus} from "lucide-react";
export default function Page() {
    return (
        <main className='relative w-full h-full p-4'>
            <header className='w-full flex flex-row justify-between'>
                <div className='flex flex-row gap-2 items-center'>
                <img className='h-6 w-6' src={'https://em-content.zobj.net/source/apple/391/waving-hand_1f44b.png'} alt={''}/>
                <Typography variant='labelS' className='text-text-Strong'>Welcome back to RDZPIT, Maciej</Typography>
                </div>

                <div>
                    <Button size='sm'>
                        <Plus className='h-4 w-4 mr-1'/>
                        Create a Meeting</Button>
                </div>
            </header>

        </main>
    );
}