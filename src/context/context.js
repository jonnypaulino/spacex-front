import { createContext } from "react";
import { SpacexState } from "./states";

export const SpacexContext = createContext({});

const SpacexProvider = ({children}) => {

    const { launches } = SpacexState();
    return (
        <SpacexContext.Provider value={{ launches }}>
            {children}
        </SpacexContext.Provider>
    )
}

export default SpacexProvider;