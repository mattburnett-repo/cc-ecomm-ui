
import { useSelector, useDispatch } from "react-redux";

import { selectSavedAddresses, saveAddress } from "../addresses/addressesSlice";
import { setCurrentAddress } from '../addresses/currentAddressActions'

import { selectCurrentCart } from "../carts/cartsSlice";

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ShippingInfoDisplay from "../../components/shipping/ShippingInfoDisplay";

export default function ShippingInfo () {
    CheckLoginStatus()

    const dispatch = useDispatch()

    let savedAddresses = []
    const theVal = useSelector(selectSavedAddresses)

    if(theVal) { savedAddresses = theVal }

    const currentCart = useSelector(selectCurrentCart)

    function handleSaveShippingInfo(e) {
        e.preventDefault();

        let firstName = e.target.firstName.value
        let lastName = e.target.lastName.value
        let address1 = e.target.address1.value
        let address2 = e.target.address2.value
        let city = e.target.city.value
        let stateProvince = e.target.stateProvince.value
        let postalCode = e.target.postalCode.value
        let country = e.target.country.value
   
        dispatch(setCurrentAddress({firstName, lastName, address1, address2, city, stateProvince, postalCode, country}))
        dispatch(saveAddress({firstName, lastName, address1, address2, city, stateProvince, postalCode, country}));
    }

    function handlers() {
        return {
            handleSaveShippingInfo: handleSaveShippingInfo       
        }
    }

    return <ShippingInfoDisplay currentCart={currentCart} savedAddresses={savedAddresses} handlers={handlers()} />
}