

// grid stuff: https://www.youtube.com/watch?v=jV8B24rSN5o&t=1298s

import styled from 'styled-components'

export const StyledProductDetailDisplay = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;

    width: 98%;

    padding: 40px 40px;
    margin: 10px auto;

    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 10px;

    #product-image {
      height: 200px;
      width: 300px;

      border: 1px solid ${({ theme }) => theme.colors.black};
    }
    #product-info {      
      display: grid
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(100px auto);

      // border: 1px solid ${({ theme }) => theme.colors.black};
    }
    #product-description-header {
      font-weight: 700;
    }
    #product-order-controls {
      display: grid;
      grid-template-columns: 2fr 2fr 1fr;

      grid-gap: 5px;
      justify-items: end;
      align-items: start;

      margin: 10px 0 0 0;
    }

    button {
        position: relative;
        background-color: ${({ theme }) => theme.colors.info};
        border: none;
        color: ${({ theme }) => theme.colors.complimentary};
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