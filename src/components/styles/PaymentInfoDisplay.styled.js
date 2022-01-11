

import styled from 'styled-components'

export const StyledPaymentInfoDisplay = styled.div`
    max-width: 60%;
    background-color: ${({ theme }) => theme.colors.paymentInfoDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`