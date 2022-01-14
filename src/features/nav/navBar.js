
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { localAuthLogout, selectUserData } from '../../features/auth/authSlice';
import { selectCurrentCart } from '../carts/cartsSlice';

import NavBarDisplay from '../../components/nav/NavBarDisplay'

export default function NavBar ( props ) {
    const { calledFrom, productName } = props;
    const [ currentCartCount, setCurrentCartCount] = useState(0);

    const dispatch = useDispatch()

    const user = useSelector(selectUserData)
    const currentCart = useSelector(selectCurrentCart)

    useEffect(() => {
        let currentCartCount = 0; // FIXME: this is sloppy and should be handled when quanity is changed / sent to redux
        currentCart.forEach(item => currentCartCount += item.quantity)

        setCurrentCartCount(currentCartCount)
    }, [currentCart])

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
            headerMessage = `${productName}`
            break
        case 'cart':
            headerMessage = 'Your Cart'
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