
import { selectCurrentAddress } from '../features/addresses/addressesSlice'

import { useSelector } from 'react-redux'

import { selectCurrentCart } from '../features/carts/cartsSlice';
import { current } from '@reduxjs/toolkit';

export default function CartSummary() {
    const currentAddress = useSelector(selectCurrentAddress)

    return (
        <h4>
            Order will ship to {currentAddress.firstName} {currentAddress.lastName}, 
            {currentAddress.address1} {currentAddress.address1},
             {currentAddress.city} {currentAddress.stateProvince},
             {currentAddress.postalCode} {currentAddress.country}
        </h4>
    )
}
