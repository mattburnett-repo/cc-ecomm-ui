

// grid stuff: https://www.youtube.com/watch?v=jV8B24rSN5o&t=1298s

import styled from 'styled-components'

export const StyledCartItemDisplay = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;

    width: 98%;
    padding: 40px;
    margin: 10px auto;

    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 10px;

    #cart-item-image {  
        height: 200px;
        width: 300px;
  
        border: 1px solid ${({ theme }) => theme.colors.black};
    }
    #cart-item-info {
        display: grid
        grid-template-columns: 1fr;
        grid-auto-rows: minmax(100px auto);
    }
    #cart-item-name-header {
        font-weight: 700;
    }
    #cart-item-order-controls {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        grid-gap: 2px;
        justify-items: end;
        align-items: start;
  
        margin: 5px 0 0 0;
    }

    #remove-from-cart-button {
        background-color: ${({ theme }) => theme.colors.warning};
        color: ${({ theme }) => theme.colors.black};
    }

    button {
        width: 100px;
        background-color: ${({ theme }) => theme.colors.warning};
        color: ${({ theme }) => theme.colors.black};
    }
`