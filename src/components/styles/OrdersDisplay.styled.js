
import styled from 'styled-components'

export const StyledOrdersDisplay = styled.div`
    width: 550px;
    background-color: ${({ theme }) => theme.colors.ordersDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`