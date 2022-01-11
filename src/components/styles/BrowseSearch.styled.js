
import styled from 'styled-components'

export const StyledBrowseSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;

    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.browseSearch};
    margin: 0 auto;
    padding: 40px 40px;

    text-align: center;
    
    border: 1px solid black;
    border-radius: 10px;
`