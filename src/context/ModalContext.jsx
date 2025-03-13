import { createContext, useEffect, useState } from 'react';

export const modalContext = createContext();

export function ModalProvider({ children }) {
  const [modalStates, setModalStates] = useState({
    isOpen: false,
    title: '',
    desc: '',
  });

  const actions = {
    openModal: (title, desc) =>
      setModalStates({
        ...modalStates,
        isOpen: true,
        title: title,
        desc: desc,
      }),
    closeModal: () => setModalStates({ ...modalStates, isOpen: false }),
    setTitle: (value) => setModalStates({ ...modalStates, title: value }),
    setDesc: (value) => setModalStates({ ...modalStates, desc: value }),
  };
  return (
    <modalContext.Provider value={{ modalStates, actions }}>
      {children}
    </modalContext.Provider>
  );
}
