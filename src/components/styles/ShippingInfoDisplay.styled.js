
import styled from 'styled-components'

export const StyledShippingInfoDisplay = styled.div`
    max-width: 60%;
    background-color: ${({ theme }) => theme.colors.shippingInfoDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`