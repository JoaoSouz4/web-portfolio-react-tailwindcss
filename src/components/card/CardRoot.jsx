
export function CardRoot({children}){
    return(
        <div>
            <div className = ' border border-[#D4D4D4] rounded-xl p-6 max-w-sm flex flex-col items-center '>
                {children}
            </div>
        </div>
    )
}