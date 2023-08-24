import { useEffect, useRef, useState } from "react";
import { SpacexController } from "../sdk/controller";

export const SpacexState = () => {
    const [page, setPage] = useState(1)
    const [nameFilter, setNameFilter] = useState("");

    const toast = useRef(null);

    
    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };
    

   
    const { allLaunches, refetch } = SpacexController(page, nameFilter);

    const [launches, setLaunches] = useState();

    useEffect(() => {
        if (allLaunches) {
            setLaunches(allLaunches)
        }
    }, [allLaunches])


    return {
        launches, page, setPage, nameFilter, setNameFilter, refetch, show, toast
    }
}