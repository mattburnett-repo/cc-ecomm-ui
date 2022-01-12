
import styled from 'styled-components'

export const StyledAuth = styled.div`
    width: 350px;
    height: 365px;
    text-align: center;
    
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    margin: 10px auto 100px auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;

    #login-error-message {
        color: ${({ theme }) => theme.colors.danger};
    }

    button {
        background-color: ${({ theme }) => theme.colors.info};
        color:  ${({ theme }) => theme.colors.complimentary};
    }
    #google-auth-button {
        width: 200px;
    }
`
