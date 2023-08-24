import _debounce from 'lodash/debounce';
import React, { useContext } from "react";
import { SpacexContext } from "../../context/context";
import { Column, Padding, Row } from "../../styles/styles";
import Input from "../../ui/Input";
import TablePrime from "../../ui/Table";

const Table = ({ columns, list, name, pathEdit, delet }) => {

    const { nameFilter, setNameFilter, refetch } = useContext(SpacexContext);

    const debouncedSearch = _debounce((text) => {
        setNameFilter(text)
        refetch()
    }, 100);

    const handleSearchChange = (event) => {
        const searchText = event.target.value;
        debouncedSearch(searchText);
    };

    const header = (
        <Row id="end">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <Input placeholder={name} value={nameFilter} onChange={handleSearchChange} />
            </span>
            <Padding padding="8px" />
        </Row>
    );

    return (
        <Column>
            <h1>
                {name}
            </h1>
            <Padding padding="16px 0">
                <TablePrime columns={columns} allGet={list} products={list.data.results} header={header} pathEdit={pathEdit} delet={delet} />
            </Padding>
            <Padding />
        </Column>
    )
}

export default Table;