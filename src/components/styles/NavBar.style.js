
import styled from 'styled-components'

export const StyledNavBar = styled.div`
    .nav-bar-container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        justify-items: center;

        background-color: ${({ theme }) => theme.colors.light};

        padding: 40px 40px;

        color: ${({ theme }) => theme.colors.secondary};

        border: 1px solid black;
        border-radius: 10px;
    }

    @media (max-width: 1000px) {
        .nav-bar-container {
            grid-template-columns: 1fr;
            font-size: 1rem;
        }

        button {
            margin-top: 2rem;
        }
    }

    .header-message {
        font-size: 3rem;
        text-align: center;
    }

    button {
        background-color: ${({ theme }) => theme.colors.navButtons};
        color: ${({ theme }) => theme.colors.black};
    }
`
