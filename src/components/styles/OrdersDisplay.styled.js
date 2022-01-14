
import styled from 'styled-components'

export const StyledOrdersDisplay = styled.div`
    width: 50rem;

    background-color: ${({ theme }) => theme.colors.light};
    margin: 10px auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;

    label {
        font-weight: 600;
    }
    .orders {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`
