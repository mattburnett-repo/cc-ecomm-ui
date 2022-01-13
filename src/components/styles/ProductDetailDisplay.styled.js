
import styled from 'styled-components'

export const StyledProductDetailDisplay = styled.div`
    display: grid;
    grid-template-areas: 'productImage productInfo productInfo productInfo productInfo';
    justify-content: space-between;

    width: 80%;
    padding: 40px 40px;
    margin: 10px auto;

    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 10px;

    #product-image {
      grid-area: productImage;

      height: 200px;
      width: 300px;

      border: 1px solid ${({ theme }) => theme.colors.black};
    }

    #product-info {
      grid-area: productInfo;
      
      width: 90%;
      margin: 0 0 0 50px;

      // border: 1px solid ${({ theme }) => theme.colors.black};
    }

    #product-order-controls {
      display: grid;
      grid-template-areas: 'productPrice productQuantity addToCart';
      align-content: bottom;
      justify-content: space-around;

      margin: 20px auto;

      // border: 1px solid ${({ theme }) => theme.colors.black};
    }

    button {
        position: relative;
        background-color: ${({ theme }) => theme.colors.info};
        border: none;
        color: ${({ theme }) => theme.colors.black};
        text-align: center;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        text-decoration: none;
        overflow: hidden;
        cursor: pointer;
      }
      
      button:after {
        content: "";
        background: #90EE90;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
      }
      
      button:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
      }
`