import { useQuery } from "react-query";
import http from "../services/axios";



const AllLaunchesRequest = async (page, search, limit) => {

    var url = `/launches?page=${page}`

    if(search !== ""){
        url += `&search=${search}`
    }


    return await http.get(url);
}

export const useFetchAllLaunches = (page, search) => {
    return useQuery(["AllLaunches", page, search], () => AllLaunchesRequest(page, search));
};

