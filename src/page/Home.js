import { Toast } from "primereact/toast";
import React, { useContext } from "react";
import Grafico from "../components/Graficos";
import Table from "../components/Table";
import { SpacexContext } from "../context/context";
import { Column, Padding, Row, RowReverse } from "../styles/styles";
import { Container } from "./style";

const Home = () => {

    const { launches, toast, succesorfail, rocketsLaunchesGraph, dataYear } = useContext(SpacexContext)

    const columns = [
        { field: 'flight_number', header: 'Nº Vôo' },
        { field: 'name', header: 'Nome' },
        { field: "associatedRocket.name", header: "fogute" }
    ];

    if (!launches) return null

    return (
        <Container>
            <Column>
                <Row id="center"><h1>SpaceX</h1></Row>
                <Padding padding="16px" />
                <RowReverse id="center">
                    <Grafico width="50%" type={"pie"} title={"Lançamentos de foguete"} chartData={rocketsLaunchesGraph} />
                    <Padding />
                    <Grafico width="50%" title={"Resultado de lançamentos"} type={"doughnut"} chartData={succesorfail} />
                </RowReverse>
                <Grafico title={"Lançamentos por ano"} type={"bar"} chartData={dataYear} />
                {
                    launches ? <Table columns={columns} list={launches} /> : null
                }
                <Toast ref={toast} />
            </Column>
        </Container>
    )
}

export default Home;