

import styled from 'styled-components'

export const StyledOrderConfirmationDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: space-between;

    width: 750px;
    height: 400px;
    text-align: left;

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

    button {
        width: 200px;
        margin: 20px;
        background-color: ${({ theme }) => theme.colors.navButtons};
        color: ${({ theme }) => theme.colors.black};
    }

    #order-confirmation-nav-buttons {
        text-align: center;
    }
`