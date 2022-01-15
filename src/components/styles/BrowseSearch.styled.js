
import styled from 'styled-components'

export const StyledBrowseSearch = styled.div`
    .browse-search-container {
        display: flex;
        flex-direction: column;
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
    }

    @media (min-width: 70rem) {
        .browse-search-container {
            flex-direction: row;
        }

        // .product-detail-container > * {
        //     flex-basis: 100%;
        // }

    }

    @media(max-width: 70rem) {
        .browse, .search {
            font-size: 1rem !important;
        }
    }


    input {
        border: 1px solid ${({ theme }) => theme.colors.info};;
    }
`