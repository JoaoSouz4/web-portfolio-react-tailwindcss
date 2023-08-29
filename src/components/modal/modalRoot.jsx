import {Close} from './modalClose';
import { useContext } from "react";
import { modalContext } from '../../context/ModalContext';

export function ModalRoot(){
    const {modalStates} = useContext(modalContext);
    console.log(modalStates)
    return(
      
           
                <div className = {modalStates.isOpen? 'fixed top-0 w-full h-full z-40 bg-[rgb(0,0,0,70%)]':'hidden'}>
                    <div className = 'flex justify-center items-center h-full p-6'>
                        <div className = 'border border-background-gover rounded-2xl p-6 bg-dark w-full sm:w-[50%] lg:w-[450px]'>
                            <div className = 'flex flex-col justify-center gap-4'>
                                <h1 className = 'text-center w-full text-md text-primary font-bold'>{modalStates.title}</h1>
                                <p className = 'text-sm'>{modalStates.desc}</p>
                            </div>
                            <Close />
                        </div>
                    </div>
                </div>
        
    )
}