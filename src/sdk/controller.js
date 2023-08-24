import { useFetchAllLaunches } from "./requests"

export const SpacexController = (page, search) => {
    const { data: allLaunches, refetch} = useFetchAllLaunches(page, search)

    return{
        allLaunches, refetch
    }
}