
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { clearCurrentCart } from '../../features/carts/currentCartActions';
import { clearCurrentOrder } from '../../features/orders/currentOrderActions';
import { localAuthLogout, selectUserData } from '../../features/auth/authSlice';
import { selectCurrentCart } from '../carts/cartsSlice';

import NavBarDisplay from '../../components/nav/NavBarDisplay'

export default function NavBar ( props ) {
    const { calledFrom, productName } = props;
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(selectUserData)
    const currentCart = useSelector(selectCurrentCart)
    let currentCartCount = currentCart.length

    let headerMessage = ''
  
    // function handleLogoutClick() {
    //     dispatch(clearCurrentCart())
    //     dispatch(clearCurrentOrder()) 
    //     dispatch(localAuthLogout())
    //     history.push('/')
    // } 

    function handleLogoutClick() {
        dispatch(localAuthLogout())

    } 

    function handlers() {
        return {
            handleLogoutClick: handleLogoutClick
        }
    }

    switch(calledFrom) {
        case 'dashboard':
            headerMessage = `Hello ${user.username}`
            break;
        case 'productsListing':
            headerMessage = '(Category) Products'
            break;
        case 'productDetail':
            headerMessage = `${productName} Details`
            break
        case 'cart':
            headerMessage = 'Cart Details'
            break;
        case 'order':
            headerMessage = 'Order Details'
            break;
        case 'shippingInfo':
            headerMessage = 'Order Checkout'
            break;
        case 'paymentInfo':
            headerMessage = 'Order Checkout'
            break;
        case 'orderConfirmation':
            headerMessage = 'Order Confirmation'
            break
        default:
            break;
    }

    return (
        <NavBarDisplay 
                calledFrom={calledFrom} 
                headerMessage={headerMessage}
                currentCartCount={currentCartCount}
                handlers={handlers()}
            />
    )
}