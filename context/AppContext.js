import { useContext, createContext } from 'react'

const AppContext = createContext();

export function AppWrapper({ children }) {
    let darkMode = true;

    return (
        <AppContext.Provider value={darkMode}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}