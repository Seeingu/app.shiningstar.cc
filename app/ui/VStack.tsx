import { HTMLAttributes } from "react"
import { StackStyleProps, useStackStyle } from "./Stack/useStackStyle"

interface Props extends StackStyleProps, HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}
export const VStack = ({ alignment, children, ...props }: Props) => {
    const style = useStackStyle({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        ...props.style
    }, { alignment })

    return <div {...props} style={style}>
        {children}
    </div>

}