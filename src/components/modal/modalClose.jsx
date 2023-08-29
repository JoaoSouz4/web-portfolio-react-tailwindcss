import Button from "../button"
import { modalContext } from "../../context/ModalContext";
import { useContext } from "react";

export function Close(){

    const {actions} = useContext(modalContext);

    return(
        <div className = 'flex justify-end'>
            <Button.Root 
                style = 'leaked'
                action={() => actions.closeModal()}
            >
                <Button.Label label = 'fechar' />
             </Button.Root>
        </div>
    )
}