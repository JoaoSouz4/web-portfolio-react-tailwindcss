export function CardDescription({text}){
    return (
        <div className = 'h-32 overflow-y-auto px-4 bg-background border-2 border-dark rounded-md mt-4 p-4' >
            <p className = 'text-[#D4D4D4] text-sm'>
                {text}
            </p>
        </div>
    )
}