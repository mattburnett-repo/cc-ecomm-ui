
import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 40px 0;

    text-align: center;
    border: ${({ theme }) => theme.borders.primary};
`
