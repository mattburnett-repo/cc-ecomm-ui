
import { useSelector, useDispatch } from "react-redux";

import { selectSavedAddresses, saveAddress } from "../addresses/addressesSlice";
import { setCurrentAddress } from '../addresses/currentAddressActions'

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ShippingInfoDisplay from "../../components/shipping/ShippingInfoDisplay";

import { handleGoToPaymentInfo } from '../../utils/handlers'

export default function ShippingInfo () {
    CheckLoginStatus()

    const dispatch = useDispatch()

    let savedAddresses = []
    const theVal = useSelector(selectSavedAddresses)

    if(theVal) {
        savedAddresses = theVal
    }

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
            handleSaveShippingInfo: handleSaveShippingInfo,
            handleGoToPaymentInfo: handleGoToPaymentInfo,            
        }
    }

    return <ShippingInfoDisplay savedAddresses={savedAddresses} handlers={handlers()} />
}