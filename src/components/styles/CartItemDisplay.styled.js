
import styled from 'styled-components'

export const StyledCartItemDisplay = styled.div`
    display: grid;
    grid-template-areas: 'cartItemImage cartItemInfo cartItemInfo cartItemInfo cartItemInfo';
    justify-content: space-between;

    width: 80%;
    padding: 40px 40px;
    margin: 10px auto;

    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 10px;

    #cart-item-image {
        grid-area: cartItemImage;
  
        height: 200px;
        width: 300px;
  
        border: 1px solid ${({ theme }) => theme.colors.black};
    }

    #cart-item-info {
        grid-area: cartItemInfo;
        
        width: 100%;
    }

    #cart-item-order-controls {
        display: grid;
        grid-template-areas: 'cartItemPrice cartItemQuantity cartItemTotal removeFromCart';
        align-content: bottom;
        justify-content: space-around;
  
        padding: 20px;
      }

    button {
        width: 200px;
        background-color: ${({ theme }) => theme.colors.info};
        color: ${({ theme }) => theme.colors.complimentary};
    }
`