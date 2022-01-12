
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
        width: 100px;
        height: 100px;

        border: 2px solid ${({ theme }) => theme.borders.black};
        border-radius: 10px;
    }
`
