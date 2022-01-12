

import styled from 'styled-components'

export const StyledOrderConfirmationDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: space-between;

    width: 550px;
    height: 500px;
    text-align: center;

    background-color: ${({ theme }) => theme.colors.light};
    margin: 20px auto;
    padding: 30px 10px;

    border: 1px solid black;
    border-radius: 10px;

    #order-details {
        display: flex;
        flex-direction: column;
        align-content: left;

        margin: 20px auto;
        padding: 20px 10px;
    }
`