import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

import { mockOrderData, mockCartData } from "../../utils/mockData";

export default function Dashboard () {
    // TODO: this should be an API call / Redux route, mocked in the test/s

    return <DashboardDisplay  orderData={ mockOrderData } cartData={ mockCartData } />
}