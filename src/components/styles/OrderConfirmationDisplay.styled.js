

import styled from 'styled-components'

export const StyledOrderConfirmationDisplay = styled.div`
    max-width: 60%;
    background-color: ${({ theme }) => theme.colors.orderConfirmationDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`