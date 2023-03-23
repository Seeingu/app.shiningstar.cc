import { CSSProperties, HTMLAttributes, useMemo } from "react"
import { StackStyleProps, useStackStyle } from "./Stack/useStackStyle"

interface Props extends StackStyleProps, HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}
export const HStack = ({ children, alignment, ...props }: Props) => {
    const style = useStackStyle({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        ...props.style
    }, { alignment })

    return <div {...props} style={style}>
        {children}
    </div>
}