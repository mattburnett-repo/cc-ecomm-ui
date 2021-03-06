
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { clearCurrentCart } from '../../features/carts/currentCartActions';
import { clearCurrentOrder } from '../../features/orders/currentOrderActions';

import { localAuthLogout } from '../../features/auth/authSlice'

// import { formatDate } from '../../utils/functions'
// import LogoutButton from '../../widgets/LogoutButton';

import { StyledOrderConfirmationDisplay } from '../styles/OrderConfirmationDisplay.styled';

export default function OrderConfirmationDisplay ( props ) {
    const { currentOrder, currentPayment, currentAddress } = props
   
    const history = useHistory()
    const dispatch = useDispatch()

    function clearCurrent() {
        dispatch(clearCurrentCart())
        dispatch(clearCurrentOrder())
    }
    
    function handleHomeClick() {
        clearCurrent()
        history.push('/')
    }

    function handleLogoutClick() {
        clearCurrent()
        dispatch(localAuthLogout())
        history.push('/')
    }

    try {
        return (
            <StyledOrderConfirmationDisplay>
                <div className="order-confirmation-container" role="presentation" aria-label="confirmation-info">
                    <div className="order-details">
                        <div role="presentation" aria-label="order-amount-date">
                            Your order for $ {currentOrder.data[0].total_price} has been placed on {currentOrder.data[0].order_date}
                        </div>
                        <div role="presentation" aria-label="order-number">
                            The order number is {currentOrder.data[0].id}
                        </div>
                        
                        <div role="presentation" aria-label="order-payment-transaction-id">
                            Stripe transaction id is {currentPayment.charge.id}
                        </div>
                        <div role="presentation" aria-label="order-payment-receipt-url">
                            Stripe receipt is at <a href={currentPayment.charge.receipt_url} rel="noreferrer" target="_blank">this link</a>
                        </div>
                        <div role="presentation" aria-label="order-delivery">
                            Order will ship to {currentAddress.firstName} {currentAddress.lastName},&nbsp;
                                                {currentAddress.address1} {currentAddress.address1},&nbsp;
                                                {currentAddress.city} {currentAddress.stateProvince},&nbsp;
                                                {currentAddress.postalCode} {currentAddress.country}
                        </div>
                    </div>
                    <br />
                    <div className="order-confirmation-nav-buttons" role="presentation" aria-label='order-confirmation-nav-buttons'>
                        <button aria-label="home" onClick={() => handleHomeClick()}>Home</button>
                        <button aria-label="logout" onClick={() => handleLogoutClick()}>Log Out</button>                        
                    </div>
                    {/* <LogoutButton /> */}
                </div>
            </StyledOrderConfirmationDisplay>
        )
    } catch (e) {
        console.log('Error in OrderConfirmationDisplay', e)
        dispatch(clearCurrentCart())
        dispatch(clearCurrentOrder()) 
        history.push('/error')
        return null
    }

}