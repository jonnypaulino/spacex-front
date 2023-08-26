import { useEffect, useRef, useState } from "react";
import { SpacexController } from "../sdk/controller";

export const SpacexState = () => {
    const [page, setPage] = useState(1)
    const [nameFilter, setNameFilter] = useState("");
    const [results, setResults] = useState()
    const [rocktesLaunches, setRocktesLaunches] = useState()
    const [rocktesLaunchesYear, setRocktesLaunchesYear] = useState()
    const [rockets, setRockets] = useState()


    const toast = useRef(null);


    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    const { allLaunches, refetch, allResults, allRocketsLaunches, allRocketsLaunchesyear, allRockets } = SpacexController(page, nameFilter);

    const [launches, setLaunches] = useState();

    useEffect(() => {
        if (allLaunches) {
            setLaunches(allLaunches)
        }
        if (allResults) {
            setResults(allResults)
        }
        if (allRocketsLaunches) {
            setRocktesLaunches(allRocketsLaunches)
        }
        if(allRocketsLaunchesyear){
            setRocktesLaunchesYear(allRocketsLaunchesyear)
        }
        if(allRockets){
            setRockets(allRockets)
        }
    }, [allLaunches, allResults, allRocketsLaunches, allRocketsLaunchesyear, allRockets])

    const documentStyle = getComputedStyle(document.documentElement);
    const succesorfail = {
        labels: ['Sucesso', 'Falhas'],
        datasets: [
            {
                data: [results?.data.success, results?.data.fails],
                backgroundColor: [
                    documentStyle.getPropertyValue('--green-500'),
                    documentStyle.getPropertyValue('--red-500'),
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--green-400'),
                    documentStyle.getPropertyValue('--red-400'),
                ]
            }
        ]
    }


    const setLabelsLaunches = () => {
        const labels = [];
        if (rocktesLaunches) {
            rocktesLaunches?.data.result.forEach(element => {
                labels.push(element.rocket)
            });
        }
        return labels
    }

    const setDataLaunches = () => {
        const data = [];
        if (rocktesLaunches) {
            rocktesLaunches?.data.result.forEach(element => {
                data.push(element.count)
            });
        }
        return data
    }

    const rocketsLaunchesGraph = {
        labels: setLabelsLaunches(),
        datasets: [
            {
                data: setDataLaunches(),
                backgroundColor: [
                    documentStyle.getPropertyValue('--green-500'),
                    documentStyle.getPropertyValue('--red-500'),
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--green-400'),
                    documentStyle.getPropertyValue('--red-400'),
                ]
            }
        ]
    }

    const setYearLaunches = () => {
        const year = [];
        if (rocktesLaunchesYear) {
            rocktesLaunchesYear?.data.result.forEach(element => {
                year.push(element.ano.toString())
            });
        }
        return year
    }

    const gerarCorAleatoria = () => {
        const letrasHexadecimais = '0123456789ABCDEF';
        let cor = '#';
      
        for (let i = 0; i < 6; i++) {
          cor += letrasHexadecimais[Math.floor(Math.random() * 16)];
        }
      
        return cor;
      }
    const setCountLaunch = (rocket) => {
        const launches = []
        if(rocktesLaunchesYear){
            rocktesLaunchesYear.data.result.forEach(element => {
                const verify = element.foguetes.find(props => props.nome === rocket)
                if(verify) {
                    launches.push(verify.quantidade)
                }else{
                    launches.push(0)
                }
            });
        }
        return launches
    }
    const setRocketsYear = () => {
        const rockets1 = [];
        if (rockets) {
            rockets?.data.result.forEach(element => {
                rockets1.push({
                    label: element.name.toString(),
                    type: "bar",
                    backgroundColor: gerarCorAleatoria(),
                    data: setCountLaunch(element.name)
                })
            });
        }
        return rockets1
    }

    const dataYear = {
        labels: setYearLaunches(),
        datasets:setRocketsYear()
    };

    return {
        launches, page, setPage, nameFilter, setNameFilter, refetch, show, toast, succesorfail, rocketsLaunchesGraph,dataYear
    }
}