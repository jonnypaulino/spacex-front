import React, { useContext } from "react";
import Table from "../components/Table";
import { Container } from "./style";
import { SpacexContext } from "../context/context";

const Home = () => {

    const { launches } = useContext(SpacexContext)

    const columns = [
        {field: 'name', header: 'Nome' },
    ];

    if(!launches) return null

    console.log(launches)


    return (
        <Container>            
            {
                launches ? <Table columns={columns} list={launches.data.results} /> : null
            }
        </Container>
    )
}

export default Home;