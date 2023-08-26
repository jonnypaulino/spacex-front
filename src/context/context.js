import { createContext } from "react";
import { SpacexState } from "./states";

export const SpacexContext = createContext({});

const SpacexProvider = ({children}) => {

    const { launches, page, setPage, nameFilter, setNameFilter, refetch,show, toast,succesorfail, rocketsLaunchesGraph,dataYear } = SpacexState();
    return (
        <SpacexContext.Provider value={{ launches, page, setPage, nameFilter, setNameFilter,refetch, show, toast, succesorfail, rocketsLaunchesGraph,dataYear }}>
            {children}
        </SpacexContext.Provider>
    )
}

export default SpacexProvider;