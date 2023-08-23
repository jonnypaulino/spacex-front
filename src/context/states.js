import { useEffect, useState } from "react";
import { SpacexController } from "../sdk/controller";

export const SpacexState = () => {

    const { allLaunches } = SpacexController();


    const [launches, setLaunches] = useState();

    useEffect(() => {
        if (allLaunches) {
            setLaunches(allLaunches)
        }
    }, [allLaunches])


    return {
        launches
    }
}