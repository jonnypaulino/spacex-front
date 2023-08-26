import styled from "styled-components";


export const Column = styled.div`
    display: flex;
    flex-direction: column;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }

`;

export const RowReverse = styled.div`
    display: flex;
    flex-direction: row;

    #space-between{
        justify-content: space-between;
    }
    #center{
        justify-content: center;
    }
    #start{
        justify-content: start;
    }
    #end{
        justify-content: end;
    }
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const Padding = styled.div`
    padding: ${props => props.padding || "4px"};
`;

