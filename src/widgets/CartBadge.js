

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { selectCurrentCart } from '../features/carts/cartsSlice'

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {StyledCartBadge} from '../components/styles/CartBadge.styled'

export default function CartBadge() {
    const history = useHistory()
    const [ itemCount, setItemCount ] = useState(0)
    const currentCart = useSelector(selectCurrentCart)

    useEffect(() => {
        let item_total_count = 0;   // FIXME: this is sloppy and should be handled when quanity is changed / sent to redux
        currentCart.forEach(item => item_total_count += item.quantity)
        setItemCount(item_total_count)
    }, [currentCart])
    
    return (
        <div role="presentation" aria-label='cart-badge'>
            <StyledCartBadge>
                <Badge color="secondary" badgeContent={itemCount}>
                    <ShoppingCartIcon style={{fontSize: 96}} onClick={() => history.push('/cart-detail')} />{" "}
                </Badge>
            </StyledCartBadge>
        </div>
    )
}
