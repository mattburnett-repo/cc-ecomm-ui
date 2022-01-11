
import styled from 'styled-components'

export const StyledProductDisplay = styled.div`
    width: 350px;
    background-color: ${({ theme }) => theme.colors.productDisplay};
    margin: 10px auto;
    padding: 10px 10px;

    border: 1px solid black;
    border-radius: 10px;

    img {
        height: 150px;
        width: 250px;

        border: 1px solid lightblue;
        border-radius: 5px;
    }

    #product-order-controls {
        display: flex;
        flex-direction: row;
        align-items: top;
        justify-content: space-around;
    }
`