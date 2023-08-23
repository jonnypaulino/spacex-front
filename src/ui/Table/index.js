import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Row } from '../../styles/styles';


const TablePrime = ({ products, columns, header, pathEdit, delet, onEdit }) => {
    const [visible, setVisible] = useState();


    const actionBodyTemplate = (rowData) => {

        return (
            <React.Fragment>
                <Row id='end'>
                    <Button icon="pi pi-pencil" rounded  className="mr-2"  />
                    <Button icon="pi pi-trash" rounded  severity="danger" onClick={() => setVisible(true)} />
                </Row>
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Deseja excluir? Essa ação é irreversível!"
                    acceptLabel='Sim'
                    rejectLabel='Não'
                    header="Confirmação" icon="pi pi-exclamation-triangle" accept={() => delet(rowData.id)} reject={() => setVisible(false)} />
            </React.Fragment>
        );
    };

    return (
        <DataTable value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((col, i) => (
                <Column align="center" key={col.field} field={col.field} header={col.header} />
            ))}
            <Column align="right" body={actionBodyTemplate} header={"Editar"} exportable={false} style={{ minWidth: '12rem' }}></Column>

        </DataTable>
    )
}

export default TablePrime;