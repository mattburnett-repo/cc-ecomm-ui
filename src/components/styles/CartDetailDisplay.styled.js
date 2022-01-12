
import styled from 'styled-components'

export const StyledCartDetailDisplay = styled.div`
    background-color: ${({ theme }) => theme.colors.cartDetailDisplay};
    text-align: right;

    width: 30%
    padding: 50px 50px;
    margin: 0 auto;

    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;

    header {
        text-align: right;
    }
    footer {
        text-align: right;
    }

`