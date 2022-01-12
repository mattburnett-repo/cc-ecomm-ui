
import styled from 'styled-components'

export const StyledBrowseSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;

    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0 auto;
    padding: 40px 40px;

    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    
    border: 1px solid black;
    border-radius: 10px;

    input {
        border: 1px solid ${({ theme }) => theme.colors.info};;
    }
`