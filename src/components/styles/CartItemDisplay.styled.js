
import styled from 'styled-components'

export const StyledCartItemDisplay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-around;

    width: 80%;
    background-color: ${({ theme }) => theme.colors.light};
    margin: 10px auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;

    img {
        height: 200px;
        width: auto;
    }
`