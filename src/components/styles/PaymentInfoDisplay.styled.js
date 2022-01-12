
import styled from 'styled-components'

export const StyledPaymentInfoDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: top;

    width: 450px;
    height: 400px;
    text-align: center;

    background-color: ${({ theme }) => theme.colors.light};
    margin: 20px auto;
    padding: 10px 40px;

    border: 1px solid black;
    border-radius: 10px;

    label {
        border: 1px solid green;
        margin: 0 10px;
    }
    .StripeElement{
        background-color: white;

        justify-content: center;
        padding: 5px;
        border: 1px solid ${({ theme }) => theme.colors.info};
    }
`