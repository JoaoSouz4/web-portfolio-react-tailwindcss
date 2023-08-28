import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export function SliderRoot({children}){
    return(
    <div className = 'w-[98%] h-full rounded-2xl w-full p-2 sm:flex sm:justify-center'>
        <div className = 'max-w-full h-[80%]  overflow-y-auto pb-2'>
            <div className = 'h-full flex flex-nowrap justify-start items-center gap-8'>
                {children}
            </div>
        </div>

    </div>
                    
                
    )
}