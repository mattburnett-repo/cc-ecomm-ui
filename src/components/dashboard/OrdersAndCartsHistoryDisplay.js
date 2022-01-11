
// https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/
import useCollapse from 'react-collapsed';

import Orders from '../../features/orders/orders'
import Carts from '../../features/carts/carts'

import { StyledOrderAndCartsHistoryDisplay } from '../styles/OrdersAndCartsHistoryDisplay.styled'

export default function OrdersAndCartsHistoryDisplay () {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <>
            <header  {...getToggleProps()}>
                <h2>Click to {isExpanded ? 'Hide' : 'Show'} Order and Cart History </h2>            
            </header>
            <div {...getCollapseProps()}>
                <StyledOrderAndCartsHistoryDisplay>
                    <Orders />
                    <Carts />
                </StyledOrderAndCartsHistoryDisplay>
            </div>
        </>
    )
}