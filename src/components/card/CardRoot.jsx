
export function CardRoot({children}){
    return(
        <div>
            <div className = ' border-2 border-dark rounded-xl p-6 max-w-sm max-h-full flex flex-col items-center '>
                {children}
            </div>
        </div>
    )
}