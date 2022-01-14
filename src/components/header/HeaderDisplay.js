
import { StyledHeader } from '../styles/Header.styled'

import CartBadge from '../../widgets/CartBadge'

export default function HeaderDisplay() {
    return (
        <StyledHeader>
            <a href="https://mattburnett-repo.github.io/portfolio-website/" rel="noreferrer" target="_blank"><img src="/ladderIcon_01.png" alt='logo'/></a>
            <h1>The Internet Store</h1>
            <CartBadge />
        </StyledHeader>
    )
}
