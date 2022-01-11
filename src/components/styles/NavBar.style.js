
import styled from 'styled-components'

export const StyledNavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;

    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.navBar};
    margin: 0 auto;
    padding: 40px 40px;

    text-align: center;

    border: 1px solid black;
    border-radius: 10px;
`