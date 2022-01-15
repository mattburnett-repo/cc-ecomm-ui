

// grid stuff: https://www.youtube.com/watch?v=jV8B24rSN5o&t=1298s

import styled from 'styled-components'

export const StyledCartItemDisplay = styled.div`
    .cart-item-container {
        display: flex;
        flex-direction: column;

        margin: 1rem auto;
        padding: 10px;

        background-color: ${({ theme }) => theme.colors.light};
        border: 1px solid ${({ theme }) => theme.colors.black};
        border-radius: 10px;
    }

    @media (min-width: 70em) {
        .cart-item-container {
            flex-direction: row;
        }

        // .cart-item-container > * {
        //     flex-basis: 100%;
        // }

        .cart-item-container > * + * {
            margin-left: 2em;
        }
    }

    label {
        font-weight: 700;
    }

    .cart-item-image {  
        display: block;
        width: 25rem;
        margin: 0 auto;

        border: 1px solid ${({ theme }) => theme.colors.black};
    }

    .cart-item-info {
        margin: 0 0 0 2rem;
        max-width: 100%;
    }

    .cart-item-order-controls {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        grid-gap: 2rem;
        justify-items: end;
        align-items: start;
    }

    .remove-from-cart-button {
        background-color: ${({ theme }) => theme.colors.warning};
        color: ${({ theme }) => theme.colors.black};
    }
`
