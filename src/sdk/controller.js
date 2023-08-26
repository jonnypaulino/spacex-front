import { useFetchAllLaunches, useFetchAllRockets, useFetchRockets, useFetchRocketsYear, useFetchSuccessorFails } from "./requests"

export const SpacexController = (page, search) => {
    const { data: allLaunches, refetch} = useFetchAllLaunches(page, search)
    const {data: allResults} = useFetchSuccessorFails()
    const {data: allRocketsLaunches} = useFetchRockets();
    const {data: allRocketsLaunchesyear} = useFetchRocketsYear();
    const {data: allRockets} = useFetchAllRockets()

    return{
        allLaunches, refetch, allResults, allRocketsLaunches, allRocketsLaunchesyear, allRockets
    }
}