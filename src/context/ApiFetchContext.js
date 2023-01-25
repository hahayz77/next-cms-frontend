import { createContext, useContext } from "react";
import { useStateContext } from "./StateContext";
const Context = createContext();


export const ApiFetchContext = ( { children } ) => {
    const { teste } = useStateContext();

    return(
        <Context.Provider value={{
            teste
        }}>
        {children}
        </Context.Provider>
    )
}

export const useApiFetchContext = () => useContext(Context);