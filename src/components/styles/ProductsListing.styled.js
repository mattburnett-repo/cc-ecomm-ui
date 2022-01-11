
import styled from 'styled-components'

export const StyledProductsListingDisplay = styled.div`
    width: 1000px;
    max-width: 90%;
    background-color: ${({ theme }) => theme.colors.productsListingDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`