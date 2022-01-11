
import styled from 'styled-components'

export const StyledProductsListingDisplay = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    flex-direction: row;

    justify-content: space-between;
    text-align: center;

    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.productsListingDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`