import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogout, selectUserData } from '../../features/auth/authSlice';
import { selectCurrentCart } from '../carts/cartsSlice';

import NavBarDisplay from '../../components/nav/NavBarDisplay'

import { handleHomeClick, handleShowCartClick, handleCheckoutClick, handleCancelClick } from '../../utils/handlers'

export default function NavBar ( props ) {
    const { calledFrom } = props;
    const dispatch = useDispatch()
    const user = useSelector(selectUserData)
    const currentCart = useSelector(selectCurrentCart)
    let currentCartCount = currentCart.length

    let headerMessage = ''
  
    function handleLogoutClick() {
        dispatch(localAuthLogout())
    }

    function handlers() {
        return {
            handleHomeClick: handleHomeClick,
            handleShowCartClick: handleShowCartClick,
            handleCheckoutClick: handleCheckoutClick,
            handleCancelClick: handleCancelClick,
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
            headerMessage = '(Product Name) Details'
            break
        case 'cart':
            headerMessage = 'Cart Details'
            break;
        case 'order':
            headerMessage = 'Order Details'
            break;
        case 'shippingInfo':
            headerMessage = 'Order Checkout / Shipping Info'
            break;
        case 'paymentInfo':
            headerMessage = 'Order Checkout / Payment Info'
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