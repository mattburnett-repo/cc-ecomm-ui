
import styled from 'styled-components'

export const StyledCartItemDisplay = styled.div`
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.cartItemDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`