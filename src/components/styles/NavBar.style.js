
import styled from 'styled-components'

export const StyledNavBar = styled.div`
    width: 500px;
    max-width: 50%;
    background-color: ${({ theme }) => theme.colors.navBar};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`