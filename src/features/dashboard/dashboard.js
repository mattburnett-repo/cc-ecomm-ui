import CheckLoginStatus from "../../utils/CheckLoginStatus";
import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

import { mockOrderData, mockCartData } from "../../utils/mockData"; // TODO: this should be an API call / Redux route, mocked in the test/s

export default function Dashboard () {
    CheckLoginStatus()

    return <DashboardDisplay  orderData={mockOrderData} cartData={ mockCartData } />
}