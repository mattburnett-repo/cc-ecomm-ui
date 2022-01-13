
import styled from 'styled-components'

export const Container = styled.div`
    max-width: 95%;
    padding: 0 20px;
    margin: 50px auto;

    background-color: ${({ theme }) => theme.colors.primary};

    border: 3px solid ${({ theme }) => theme.colors.info};
    border-radius: 5px;
`
