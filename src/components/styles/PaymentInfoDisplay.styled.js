
import styled from 'styled-components'

export const StyledPaymentInfoDisplay = styled.div`
    .payment-info-container {
        display: flex;
        flex-direction: column;
        align-items: top;

        width: 25rem;
        text-align: center;

        background-color: ${({ theme }) => theme.colors.light};
        margin: 20px auto;
        padding: 10px 40px;

        border: 1px solid black;
        border-radius: 10px;
    }

    label {
        margin: 0 10px;
    }

    .StripeElement{
        background-color: white;

        justify-content: center;
        padding: 5px;
    }

    button {
        width: 200px;
        background-color: ${({ theme }) => theme.colors.info};
        color: ${({ theme }) => theme.colors.complimentary};
    }
`