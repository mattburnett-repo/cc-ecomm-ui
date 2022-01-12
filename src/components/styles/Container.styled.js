
import styled from 'styled-components'

export const Container = styled.div`
    width: 1500px;
    max-width: 100%;
    padding: 0 20px;
    margin: 10px auto;

    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
`
