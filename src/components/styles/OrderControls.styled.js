
import styled from 'styled-components'

export const StyledOrderControls = styled.div`
    #order-controls {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    label {
        font-weight: 600;
        padding: 0px;
    }

    #remove-from-cart-button {
        background-color: ${({ theme }) => theme.colors.warning};
        color: ${({ theme }) => theme.colors.black};
    }
`