
import styled from 'styled-components'

export const StyledShippingInfoDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: space-between;

    width: 450px;
    height: 500px;
    text-align: center;

    background-color: ${({ theme }) => theme.colors.light};
    margin: 20px auto;
    padding: 10px 10px;

    border: 1px solid black;
    border-radius: 10px;

    #first-name, #last-name, #address-1, #address-2, #city,
    #state-province, #postal-code, #country {
        display: flex;
        justify-content: space-between
    }

    input {
        border: 1px solid ${({ theme }) => theme.colors.info};;
    }

    button {
        width: 200px;
        margin: 0 0 20px 0;

        background-color: ${({ theme }) => theme.colors.info};
        color: ${({ theme }) => theme.colors.complimentary};
    }
`