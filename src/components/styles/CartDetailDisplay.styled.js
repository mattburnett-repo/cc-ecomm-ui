
import styled from 'styled-components'

export const StyledCartDetailDisplay = styled.div`

overflow: auto;

    #cart-total-price {
        background-color: ${({ theme }) => theme.colors.light};
        text-align: right;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 5px;

        width: 15%;
        padding: 30px;
        margin: 0 0 0 1550px;
    }

`