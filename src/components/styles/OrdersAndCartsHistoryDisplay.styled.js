
import styled from 'styled-components'

export const StyledOrderAndCartsHistoryDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;

    // justify-content: space-between;
    // text-align: center;
    
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.complimentary};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`