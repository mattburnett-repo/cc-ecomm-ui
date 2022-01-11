
import styled from 'styled-components'

export const StyledAuth = styled.div`
    width: 350px;
    height: 365px;
    text-align: center;
    
    background-color: ${({ theme }) => theme.colors.auth};
    margin: 0 auto;
    padding: 40px 40px;

    border: 1px solid black;
    border-radius: 10px;
`
