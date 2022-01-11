
import styled from 'styled-components'

export const StyledOrderAndCartsHistoryDisplay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-around;
    
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.ordersAndCartHistoryDisplay};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`