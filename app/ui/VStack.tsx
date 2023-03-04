import { StackStyleProps, useStackStyle } from "./Stack/useStackStyle"

interface Props extends StackStyleProps {
    children: React.ReactNode
}
export const VStack = ({ alignment, children }: Props) => {
    const style = useStackStyle({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    }, { alignment })

    return <div style={style}>
        {children}
    </div>

}