import { InputText } from "primereact/inputtext";
import React from "react";
import { Column } from "../../styles/styles";

const Input = ({label, smallLabel, placeholder, onChange, name, value, type, requerid, style}) => {
    return(
        <Column>
            <label htmlFor="username">{label}</label>
            <InputText requerid={requerid} style={{backgroundColor: "#F6F7F7", ...style}} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
            <small id="username-help">
                {smallLabel}
            </small>
        </Column>
    )
}

export default Input;