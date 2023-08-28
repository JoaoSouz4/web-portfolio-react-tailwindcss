import Balancer from 'react-wrap-balancer';

export function CardDescription({text}){
    return (
        <div className = ' overflow-y-auto px-2 bg-background border-2 border-dark rounded-md p-4 w-full' >
           
                <p className = 'text-[#D4D4D4] text-sm'>
                    {text}
                </p>
            
        </div>
    )
}