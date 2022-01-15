
import styled from 'styled-components'

export const StyledNavBar = styled.div`
    .nav-bar-container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        justify-items: center;

        // max-width: 100%;
        background-color: ${({ theme }) => theme.colors.light};
        // margin: 10px 0 auto;
        padding: 40px 40px;

        // text-align: center;
        color: ${({ theme }) => theme.colors.secondary};

        border: 1px solid black;
        border-radius: 10px;
    }

    @media (max-width: 1000px) {
        .nav-bar-container {
            grid-template-columns: 1fr;
            font-size: 1rem;
        }

        // .nav-bar-container > * {
        //     flex-basis: 100%;
        // }

        // .nav-bar-container > * + * {
        //     margin-left: 2em;
        // }

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
