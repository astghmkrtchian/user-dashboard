import { createContext, useState } from 'react';

const PopupContext = createContext();

const PopupProvider = ({ children }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <PopupContext.Provider value={{ isFormVisible, setIsFormVisible }}>
            {children}
        </PopupContext.Provider>
    );
};

export { PopupProvider, PopupContext };
