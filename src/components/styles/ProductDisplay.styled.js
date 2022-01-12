
import styled from 'styled-components'

export const StyledProductDisplay = styled.div`
    width: 350px;
    background-color: ${({ theme }) => theme.colors.light};
    margin: 10px auto;
    padding: 10px 10px;

    border: 1px solid black;
    border-radius: 10px;

    img {
        height: 150px;
        width: 250px;

        border: 1px solid lightblue;
        border-radius: 5px;
    }

    #product-order-controls {
        display: flex;
        flex-direction: row;
        align-items: top;
        justify-content: space-around;
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