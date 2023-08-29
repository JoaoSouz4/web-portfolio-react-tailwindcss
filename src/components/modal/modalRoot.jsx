import {Close} from './modalClose';
import { useContext } from "react";
import { modalContext } from '../../context/ModalContext';

export function ModalRoot(){
    const {modalStates} = useContext(modalContext);
    return(
      
           
                <div className = {modalStates.isOpen? 'fixed top-0 w-full h-full z-40 bg-[rgb(0,0,0,70%)]':'hidden'}>
                    <div className = 'flex justify-center items-center h-full p-6'>
                        <div className = 'border border-background-gover rounded-2xl p-6 bg-dark w-full'>
                            <div className = ''>
                                <h1>{modalStates.title}</h1>
                                <p>{modalStates.desc}</p>
                            </div>
                            <Close />
                        </div>
                    </div>
                </div>
        
    )
}