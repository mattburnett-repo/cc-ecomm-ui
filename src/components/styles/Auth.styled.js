
import styled from 'styled-components'

export const StyledAuth = styled.div`
    display: flex;
    flex-flow: column;
    width: 350px;
    text-align: center;
    
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    margin: 10px auto 100px auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;

    #login-error-message, #register-error-message {
        color: ${({ theme }) => theme.colors.danger};
    }

    button {
        background-color: ${({ theme }) => theme.colors.info};
        color:  ${({ theme }) => theme.colors.complimentary};
    }
    
    #google-auth-button {
        width: 200px;
    }

    #auth-header {
        font-size: 2rem;
    }
`
