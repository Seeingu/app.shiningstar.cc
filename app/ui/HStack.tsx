import { CSSProperties, useMemo } from "react"
import { StackStyleProps, useStackStyle } from "./Stack/useStackStyle"

interface Props extends StackStyleProps {
    children: React.ReactNode
}
export const HStack = ({ children, alignment }: Props) => {
    const style = useStackStyle({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }, { alignment })

    return <div style={style}>
        {children}
    </div>
}