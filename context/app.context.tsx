import {type PropsWithChildren } from 'react';
import { type JSX } from 'react';
import { createContext } from 'react';


export interface IAppContext {
    gitUrl: string;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppContextProvider = ({children, gitUrl}: PropsWithChildren<IAppContext>):JSX.Element => {
    return <AppContext.Provider value={{gitUrl}}>
        {children}
    </AppContext.Provider>;
};