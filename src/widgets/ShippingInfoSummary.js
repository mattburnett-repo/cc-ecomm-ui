
import { selectCurrentAddress } from '../features/addresses/addressesSlice'

import { useSelector } from 'react-redux'

export default function CartSummary() {
    const currentAddress = useSelector(selectCurrentAddress)

    return (
        <div role='presentation' aria-label='shipping-summary-info'>
            Order will ship to {currentAddress.firstName} {currentAddress.lastName}, 
            {currentAddress.address1} {currentAddress.address1},
             {currentAddress.city} {currentAddress.stateProvince},
             {currentAddress.postalCode} {currentAddress.country}
        </div>
    )
}
