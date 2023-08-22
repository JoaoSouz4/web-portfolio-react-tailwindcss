export function ButtonRoot({children, style}){
    return(
        <button
            className = { style == 'leaked'? 'bg-transparent border-2 border-primary rounded-md px-9 py-2': 'bg-primary rounded-md px-9 py-2'}
        >
            {children}
        </button>
    )
}