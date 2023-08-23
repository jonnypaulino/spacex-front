import { Button } from "primereact/button";
import React from "react";

        

const ButtonPrime = ({label, onClick, icon, iconPos, severity, type}) => {
    return(
        <div className="card flex justify-content-center">
            <Button type={type} style={{width: "100%"}} onClick={onClick} icon={icon} iconPos={iconPos} severity={severity}>
                {label}
            </Button>
        </div>
    )
}

export default ButtonPrime;