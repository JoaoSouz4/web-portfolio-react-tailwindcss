export function ButtonRoot({children, style, action}){

    const handleClick = () => {
        if(action) action();
    }
    return(
        <button
            className = { style == 'leaked'? 'bg-transparent border-2 border-primary rounded-md px-4 py-2': 'bg-primary rounded-md px-9 py-2'}
            onClick = {handleClick}
        >
            {children}
        </button>
    )
}