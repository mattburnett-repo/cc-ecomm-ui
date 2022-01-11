
import styled from 'styled-components'

export const StyledProductDetailDisplay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-around;

    width: 80%;
    background-color: ${({ theme }) => theme.colors.productDetailDisplay};
    margin: 10px auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;

    img {
        height: 200px;
        width: auto;
    }
`