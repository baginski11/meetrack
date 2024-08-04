



interface SeparatorProps {
    className?: string
    direction?: 'horizontal' | 'vertical'
}





export default function Separator(props: SeparatorProps) {
    const {className, direction = 'horizontal'} = props


    const styles = {
        horizontal: 'h-[10px] w-full',
        vertical: 'h-full w-[1px]'

    }

    const style = styles[direction]
    return (
        <div className={`h-[1px] w-full bg-stroke-Soft dark:bg-neutral-700`}/>
    )
}