import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export function SliderRoot({children}){
    return(
        <div className = 'w-full flex justify-center items-center'>
            {/* <div className = 'rounded-full border border-ligth flex justify-center items-center w-[1.5rem] h-[1.5rem]'>
                <AiOutlineArrowLeft />
            </div> */}

            <div className = ' inline w-[300px] overflow-x-auto items-center flex flex-row p-4 gap-7'>
                {children}
            </div>

            {/* <div className = 'rounded-full border border-ligth flex justify-center items-center w-[1.5rem] h-[1.5rem]'>
                <AiOutlineArrowRight />
            </div> */}
        </div>
    )
}