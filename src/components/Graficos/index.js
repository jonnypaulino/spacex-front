
import { Chart } from 'primereact/chart';
import React from 'react';
import { Column } from '../../styles/styles';
const Grafico = ({chartData, chartOptions, type, title, width}) => {

    return (
        <Column style={{padding: "16px", minWidth: "40%", alignItems: type !== "bar" ? "center" : ''}}>
            <h1 style={{fontSize: "18px"}}>{title}</h1>
            <Chart type={type} width={width} data={chartData} options={chartOptions} />
        </Column>
    )
}

export default Grafico;