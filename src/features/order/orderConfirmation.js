import CheckLoginStatus from "../../utils/checkLoginStatus";
import OrderConfirmationDisplay from "../../components/order/OrderConfirmationDisplay";

import { mockOrderConfirmationData } from "../../utils/mockData"; // TODO: data from API / Redux

export default function OrderConfirmation () {
    CheckLoginStatus()
    
    return <OrderConfirmationDisplay data={ mockOrderConfirmationData } />
}