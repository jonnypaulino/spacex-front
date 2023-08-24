import styled from "styled-components";

export const Sucess = styled.div`
    padding: 8px;
    background-color: ${props => props.color ? "green" : "#dc3545"};
    color: white;
    width: 70%;
    margin: auto;
    font-weight: bold;
`;