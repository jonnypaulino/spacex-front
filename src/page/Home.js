import React, { useContext } from "react";
import Table from "../components/Table";
import { Container } from "./style";
import { SpacexContext } from "../context/context";
import { Toast } from "primereact/toast";

const Home = () => {

    const { launches, toast } = useContext(SpacexContext)

    const columns = [
        { field: 'flight_number', header: 'Nº Vôo' },
        { field: 'name', header: 'Nome' },
    ];

    if (!launches) return null



    return (
        <Container>
            {
                launches ? <Table columns={columns} list={launches} /> : null
            }
            <Toast ref={toast} />

        </Container>
    )
}

export default Home;