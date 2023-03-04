export const Center = ({ children }: React.PropsWithChildren) => {
    return <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }}>
        {children}
    </div>
}