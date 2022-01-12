
import styled from 'styled-components'

export const StyledNavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;

    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    margin: 10px 0 auto;
    padding: 40px 40px;

    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};

    border: 1px solid black;
    border-radius: 10px;

    button {
        color: ${({ theme }) => theme.colors.black};
    }

    #header-message {
        font-size: 3rem;
    }
`