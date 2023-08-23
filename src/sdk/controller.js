import { useFetchAllLaunches } from "./requests"

export const SpacexController = () => {
    const { data: allLaunches} = useFetchAllLaunches()

    return{
        allLaunches
    }
}