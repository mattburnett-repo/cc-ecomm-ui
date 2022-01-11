
import styled from 'styled-components'

export const StyledProductDetailDisplay = styled.div`
    width: 300px;
    background-color: ${({ theme }) => theme.colors.productDetailDisplay};
    margin: 10px auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;

    img {
        height: 150px;
        width: 400px;
    }
`