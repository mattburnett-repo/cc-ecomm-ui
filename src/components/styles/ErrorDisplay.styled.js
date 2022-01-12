
import styled from 'styled-components'

export const StyledErrorDisplay = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 40px 40px;

    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.info};
    text-align: center;

    border: 1px solid black;
    border-radius: 10px;
`