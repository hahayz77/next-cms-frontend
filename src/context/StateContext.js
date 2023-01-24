import { createContext, useContext } from "react";

const Context = createContext();

export const StateContext = ( { children } ) => {
    const test = "useContext";
    return(
        <Context.Provider value={{
            test,
        }}>
        {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);