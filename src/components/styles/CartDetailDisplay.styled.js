
import styled from 'styled-components'

export const StyledCartDetailDisplay = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    #cart-total-price {
        background-color: ${({ theme }) => theme.colors.light};
        text-align: right;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 5px;

        width: 15%;
        padding: 30px;
        margin: 0 0 0 1550px;
    }

    // button {
    //     width: 200px;
    //     background-color: ${({ theme }) => theme.colors.info};
    //     color: ${({ theme }) => theme.colors.complimentary};
    // }

`