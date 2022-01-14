
import styled from 'styled-components'

export const StyledOrderControls = styled.div`
    #order-controls {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        // display: flex;
        // flex-direction: row;
        // align-items: top;
        // justify-content: space-between;
    }

    #remove-from-cart-button {
        background-color: ${({ theme }) => theme.colors.warning};
        color: ${({ theme }) => theme.colors.black};
    }
`