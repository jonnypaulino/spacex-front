import React, { useState } from "react";
import { Column, Padding, Row } from "../../styles/styles";
import Input from "../../ui/Input";
import ButtonPrime from "../../ui/Button";
import TablePrime from "../../ui/Table";

const Table = ({columns, list, name, pathEdit, delet}) => {

    const [nameFilter, setNameFilter] = useState("");

    const larguraTela = window.innerWidth;


    const header = (
        <Row id="end">
                <div className="p-inputgroup" style={{width: larguraTela < 700 ? "60%" : "30%"}}>
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-search"></i>
                    </span>
                    <Input placeholder={name} value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
                </div>
                <ButtonPrime label={"buscar"} />
        </Row>
    );

    const filterName = nameFilter !== "" ? list.filter(filt => filt?.nome?.toLowerCase()?.includes(nameFilter) || filt?.servico?.toLowerCase()?.includes(nameFilter)) : list

    return(
            <Column>
                    <h1>
                        {name}
                    </h1>
                    <Padding padding="16px 0">
                        <TablePrime columns={columns} products={filterName} header={header}  pathEdit={pathEdit} delet={delet}/>
                    </Padding>
                    <Padding />
            </Column>
    )
}

export default Table;