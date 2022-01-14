

import styled from 'styled-components'

export const StyledCartCheckoutDisplay = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: end;

    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;

    width: 98%;
    padding: 40px;
    margin: 10px auto;
    // padding: 10px;
    // margin: 0 auto;

    button {
        width: 100px;
        background-color: ${({ theme }) => theme.colors.info};
        color: ${({ theme }) => theme.colors.complimentary};
    }

`