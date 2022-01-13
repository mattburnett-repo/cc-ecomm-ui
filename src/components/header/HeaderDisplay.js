
import { StyledHeader } from '../styles/Header.styled'

import CartBadge from '../../widgets/CartBadge'

export default function HeaderDisplay() {
    return (
        <StyledHeader>
            <img src="/ladderIcon_01.png" alt='logo'/>
            <h1>The Internet Store</h1>
            <CartBadge />
        </StyledHeader>
    )
}
