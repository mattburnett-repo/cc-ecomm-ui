
import styled from 'styled-components'

export const StyledNavBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;

    // display: flex;
    // flex-direction: row;
    // align-items: top;
    // justify-content: space-around;

    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    // margin: 10px 0 auto;
    padding: 40px 40px;

    // text-align: center;
    color: ${({ theme }) => theme.colors.secondary};

    border: 1px solid black;
    border-radius: 10px;

    #header-message {
        text-align: center;
    }

    button {
        background-color: ${({ theme }) => theme.colors.navButtons};
        color: ${({ theme }) => theme.colors.black};
    }

    #header-message {
        font-size: 3rem;
    }
`