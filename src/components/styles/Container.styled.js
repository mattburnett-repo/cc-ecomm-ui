
import styled from 'styled-components'

export const Container = styled.div`
    max-width: 98%;
    padding: 0 20px;
    margin: 50px auto;

    background-color: ${({ theme }) => theme.colors.primary};

    border: 2px solid ${({ theme }) => theme.colors.light};
    border-radius: 5px;
`
