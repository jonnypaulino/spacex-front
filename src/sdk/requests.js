import { useQuery } from "react-query";
import http from "../services/axios";



const AllLaunchesRequest = async () => {
    return await http.get("/launches");
}

export const useFetchAllLaunches = () => {
    return useQuery("AllLaunches", () => AllLaunchesRequest());
  };

