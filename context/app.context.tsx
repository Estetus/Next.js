import { createContext, JSX, PropsWithChildren } from "react";


export interface IAppContext {
    gitUrl: string;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppContextProvider = ({children, gitUrl}: PropsWithChildren<IAppContext>):JSX.Element => {
    return <AppContext.Provider value={{gitUrl}}>
        {children}
    </AppContext.Provider>
}