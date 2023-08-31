import { useState, createContext } from "react";

export const FormContext = createContext();

export function FormProvider ({children}) {

    const [ formStates, setFormStates ] = useState({
        name: '',
        email: '',
        message: '',
        isFetching: false,
    });

    const buildActions = {
        setName: (e) => setFormStates({...formStates, name: e}),
        setEmail: (e) => setFormStates({...formStates, email: e}),
        setMessage: (e) => setFormStates({...formStates, message: e}),
        setRequestStatus: (value => setFormStates({...formStates, isFetching: value})),
        clear: () => {
            setFormStates({
                ...formStates,
                name: '',
                email: '',
                message: '',
            })
        }
    }

    return (
        <FormContext.Provider value = {{formStates, buildActions}}>
            {children}
        </FormContext.Provider>
    )
}