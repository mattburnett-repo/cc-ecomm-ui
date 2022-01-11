
import styled from 'styled-components'

export const StyledCartDetailDisplay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-around;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.cartDetailDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;



`