export const Spacer = (props: { value?: number }) => {
    const { value = 8 } = props
    return <div style={{
        width: `${value}px`
    }}></div>

}