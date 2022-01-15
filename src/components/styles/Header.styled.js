
import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    padding: 40px 0;

    text-align: center;
    border: ${({ theme }) => theme.borders.black};

    img {
        max-width: 7rem;
        min-width: 7rem;
        min-width: 5rem;
        min-height: 5rem;

        border: 2px solid ${({ theme }) => theme.borders.black};
        border-radius: 10px;
    }
`
