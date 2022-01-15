
import styled from 'styled-components'

export const StyledOrderControls = styled.div`
    .order-controls {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        margin: 10px 10px;
    }

    label {
        font-weight: 600;
        padding: 0px;
    }

    .add-to-cart-button {
        background-color: ${({ theme }) => theme.colors.info};
        color: ${({ theme }) => theme.colors.complimentary};
    }
    .remove-from-cart-button {
        background-color: ${({ theme }) => theme.colors.warning};
        color: ${({ theme }) => theme.colors.black};
    }
`