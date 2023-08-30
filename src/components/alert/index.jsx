import { useContext } from "react";
import { AlertContext } from "../../context/AlertContext";
import {AiOutlineWarning} from 'react-icons/ai';

export default function Alert(){

    const {alertState} = useContext(AlertContext);

    return(
        <div className = {alertState.isOpen? `fixed bottom-5 left-[1rem] z-40  shadow-2xl` : 'hidden'}>

                <div className = 'bg-dark shadow-2xl z-40 shadow-dark rounded-2xl px-6 py-4 border border-ligth animate-fade'>
                    <div className = 'flex items-center gap-2'>
                        {alertState.statusAlert == 'warning' && <AiOutlineWarning />}
                        {alertState.message}
                    </div>
                </div>

        </div>
    )
}