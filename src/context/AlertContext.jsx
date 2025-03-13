import { useState, createContext } from 'react';

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alertState, setAlertState] = useState({
    isOpen: false,
    message: '',
    statusAlert: '',
  });

  const buildActions = {
    openAlert: (statusAlert, message) => {
      setAlertState({
        ...alertState,
        isOpen: true,
        statusAlert: statusAlert,
        message: message,
      });
      setTimeout(() => {
        {
          setAlertState({
            ...alertState,
            isOpen: false,
            statusAlert: '',
            message: '',
          });
        }
      }, 3000);
    },
  };

  return (
    <AlertContext.Provider value={{ alertState, buildActions }}>
      {children}
    </AlertContext.Provider>
  );
}
