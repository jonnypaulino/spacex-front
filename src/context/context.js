import { createContext } from "react";
import { SpacexState } from "./states";

export const SpacexContext = createContext({});

const SpacexProvider = ({children}) => {

    const { launches, page, setPage, nameFilter, setNameFilter, refetch,show, toast } = SpacexState();
    return (
        <SpacexContext.Provider value={{ launches, page, setPage, nameFilter, setNameFilter,refetch, show, toast }}>
            {children}
        </SpacexContext.Provider>
    )
}

export default SpacexProvider;