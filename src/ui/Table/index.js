import { format } from 'date-fns';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useContext } from 'react';
import { SpacexContext } from '../../context/context';
import { Row } from '../../styles/styles';
import PaginatorSpace from '../Pagination';
import { Sucess } from './style';


const TablePrime = ({ products, columns, header, pathEdit, delet, allGet }) => {
    const { page, setPage } = useContext(SpacexContext)
    
    const pages = Math.ceil(allGet.data.totalDocs / 5);

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Row id='center'>
                    <Button onClick={() => rowData.links.webcast ? window.open(rowData.links.webcast) : alert('Sem video para esse lançamento')} icon="pi pi-youtube" rounded severity="danger" className="mr-2" />
                </Row>
            </React.Fragment>
        );
    };

    const sucessornotTemplate = (rowData) => {

        return (
            <React.Fragment>
                <Sucess color={rowData.success} >{rowData.success ? "Sucesso" : "Falha"}</Sucess>
            </React.Fragment>
        );
    };

    const dataTemplate = (rowData) => {

        const convertedDate = format(new Date(rowData.date_local), 'dd/MM/yyyy');

        return (
            <div>
                {convertedDate}
            </div>
        )
    }

    const logoTemplate = (rowData) => {
        return (
            <Avatar label="V" image={rowData.links.patch.small} size="normal" style={{ backgroundColor: !rowData.links.patch.small ? '#2196F3' : "transparent", color: '#ffffff' }} />
        )
    }

    return (
        <>
            <DataTable value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column align="center" key={col.field} field={col.field} header={col.header} />
                ))}
                <Column align='center' body={logoTemplate} header={"Logo"} exportable={false} style={{ minWidth: 'auto' }}></Column>
                <Column align='center' body={dataTemplate} header={"Data de lançamento"} exportable={false} style={{ minWidth: '12rem' }}></Column>
                <Column align='center' body={sucessornotTemplate} header={"Resultado"} exportable={false} style={{ minWidth: '12rem' }}></Column>
                <Column align='center' body={actionBodyTemplate} header={"Video"} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>

            <PaginatorSpace first={page - 1} onPageChange={(e) => setPage(e.first + 1)} totalRecords={pages} rows={5} />
        </>
    )
}

export default TablePrime;