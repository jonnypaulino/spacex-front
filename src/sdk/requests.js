import { useQuery } from "react-query";
import http from "../services/axios";



const AllLaunchesRequest = async (page, search, limit) => {
    var url = `/launches?page=${page}`
    if (search !== "") {
        url += `&search=${search}`
    }
    return await http.get(url);
}

const AllSuccessorFailsRequest = async () => {
    var url = `/launches/stats`
    return await http.get(url);
}

const RocketsRequest = async () => {
    var url = `/launches/rockets`
    return await http.get(url);
}


const RocketsYearRequest = async () => {
    var url = `launches/rockets/year`
    return await http.get(url);
}

const AllRocketsRequest = async () => {
    var url = `/rockets`
    return await http.get(url);
}

export const useFetchAllLaunches = (page, search) => {
    return useQuery(["AllLaunches", page, search], () => AllLaunchesRequest(page, search));
};

export const useFetchAllRockets = () => {
    return useQuery(["AllRocktes",], () => AllRocketsRequest());
};

export const useFetchRockets = () => {
    return useQuery(["AllLaunachRocktes",], () => RocketsRequest());
};

export const useFetchRocketsYear = () => {
    return useQuery(["AllRocktesYear",], () => RocketsYearRequest());
};

export const useFetchSuccessorFails = () => {
    return useQuery(["AllLaunches"], () => AllSuccessorFailsRequest());
};

