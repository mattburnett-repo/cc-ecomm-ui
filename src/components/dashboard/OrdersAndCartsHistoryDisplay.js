
import Orders from '../../features/orders/orders'
import Carts from '../../features/carts/carts'

import { StyledOrderAndCartsHistorynDisplay } from '../styles/OrdersAndCartsHistoryDisplay.styled'

export default function OrdersAndCartsHistoryDisplay () {
    return (
        <>
            <header>
                <h2>Order and Cart History</h2>            
            </header>
            <StyledOrderAndCartsHistorynDisplay>
                <Orders />
                <Carts />
            </StyledOrderAndCartsHistorynDisplay>
        </>
    )
}