import { CSSProperties, useMemo } from "react"

export interface StackStyleProps {
    alignment?: 'leading'
}

export const useStackStyle = (defaultStyles: CSSProperties, props: StackStyleProps): CSSProperties => {
    const style = useMemo(() => {
        const style: CSSProperties = {
            ...defaultStyles
        }
        if (props.alignment != 'leading') {
            if (defaultStyles.flexDirection !== 'column') {
                style.justifyContent = 'space-around'
            } else {
                style.alignItems = 'center'
            }
        }
        return style
    }, [props])
    return style
}