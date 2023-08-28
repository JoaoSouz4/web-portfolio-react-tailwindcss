
export function CardRoot({children}){
    return(
        
        <div className = 'max-w-[300px] lg: max-w-[400px] h-full  flex shrink-0 grow-0 flex-col justify-around shrink-0 border-2 border-dark rounded-xl p-4 gap-[1rem]'>
            {children}
        </div>
        
    )
}