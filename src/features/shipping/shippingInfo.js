

import CheckLoginStatus from "../../utils/CheckLoginStatus";
import ShippingInfoDisplay from "../../components/shipping/ShippingInfoDisplay";

import { handleSaveShippingInfo, handleGoToPaymentInfo } from '../../utils/handlers'

// TODO: get any saved addresses for this user
// TODO: allow user to save address info

export default function ShippingInfo () {
    CheckLoginStatus()

    function handlers() {
        return {
            handleSaveShippingInfo: handleSaveShippingInfo,
            handleGoToPaymentInfo: handleGoToPaymentInfo            
        }
    }

    return <ShippingInfoDisplay handlers={handlers()} />
}