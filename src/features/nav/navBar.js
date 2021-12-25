import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogout, selectUserData } from '../../features/auth/authSlice';

import NavBarDisplay from '../../components/nav/NavBarDisplay'

export default function NavBar ( props ) {
    // const { calledFrom } = props;
    const dispatch = useDispatch()
    const user = useSelector(selectUserData)

    let headerMessage = ''

    function handleHomeClick() {
        console.log('handleHomeClick')
    }
    function handleShowCartClick() {
        console.log('handleShowCartClick')
    }
    function handleCheckoutClick() {
        console.log('handleCheckoutClick')
    }
    function handleCancelClick() {
        console.log('handleCanceClick')
    }
    function handleLogoutClick() {
        dispatch(localAuthLogout())
    }

    switch(props.calledFrom) {
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
                calledFrom={props.calledFrom} 
                headerMessage={headerMessage} 
                handleHomeClick={handleHomeClick}
                handleShowCartClick={handleShowCartClick}
                handleCheckoutClick={handleCheckoutClick}
                handleCancelClick={handleCancelClick}
                handleLogoutClick={handleLogoutClick}
            />
    )
}