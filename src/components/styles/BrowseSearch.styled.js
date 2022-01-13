
import styled from 'styled-components'

export const StyledBrowseSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;

    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    margin: 20px auto;
    padding: 40px 40px;

    font-size: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    
    border: 1px solid black;
    border-radius: 10px;

    input {
        border: 1px solid ${({ theme }) => theme.colors.info};;
    }
`