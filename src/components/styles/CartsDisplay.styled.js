
import styled from 'styled-components'

export const StyledCartsDisplay = styled.div`
    width: 50rem;

    background-color: ${({ theme }) => theme.colors.light};
    margin: 10px auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;

    label {
        font-weight: 600;
    }
    .carts {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`