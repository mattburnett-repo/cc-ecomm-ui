

// responsive stuff: https://www.youtube.com/watch?v=bn-DQCifeQQ

import styled from 'styled-components'

export const StyledProductDetailDisplay = styled.div`
    .product-detail-container {
        display: flex;
        flex-direction: column;

        margin: 1rem auto;
        padding: 10px;

        background-color: ${({ theme }) => theme.colors.light};
        border: 1px solid ${({ theme }) => theme.colors.black};
        border-radius: 10px;
    }

    @media (min-width: 70em) {
        .product-detail-container {
            flex-direction: row;
        }

        // .product-detail-container > * {
        //     flex-basis: 100%;
        // }

        .product-detail-container > * + * {
            margin-left: 2em;
        }
    }

    label {
      font-weight: 700;
    }
    
    .product-image {
        display: block;
        // max-width: 100%;
        width: min(100%, 25rem);
        margin: 0 auto;

        border: 1px solid ${({ theme }) => theme.colors.black};
    }

    .product-info {      
        margin: 10px 10px;
        max-width: 100%
    }
`