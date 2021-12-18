import DashboardDisplay from "../../components/dashboard/DashboardDisplay";

export default function Dashboard () {
    // TODO: this should be an API call, mocked in the test/s
    const mockOrderData = [{
        "order": {
            "cart": {
                "cart_id": 1,
                "cart_items": [
                    {
                        "product_id": 1,
                        "product_name": "product_name_01",
                        "product_price": 1,
                        "product_quantity": 1,
                        "product_total_price": 1
                    },
                    {
                        "product_id": 2,
                        "product_name": "product_name_02",
                        "product_price": 2,
                        "product_quantity": 2,
                        "product_total_price": 4
                    },
                    {
                        "product_id": 3,
                        "product_name": "product_name_03",
                        "product_price": 3,
                        "product_quantity": 3,
                        "product_total_price": 9
                    },
                    {
                        "product_id": 4,
                        "product_name": "product_name_04",
                        "product_price": 4,
                        "product_quantity": 4,
                        "product_total_price": 16
                    }
                ]
            },
            "user_id": 1,
            "order_id": 1,
            "order_date": null,
            "total_price": {
                "sum": 30,
                "cart_id": 1
            }
        }
    }];
    
    const mockCartData = [
        {
            "id": 1,
            "product_id": 1,
            "name": "product_name_01",
            "product_quantity": 1,
            "product_price": "1.00",
            "line_item_total_price": "1.00"
        },
        {
            "id": 1,
            "product_id": 2,
            "name": "product_name_02",
            "product_quantity": 2,
            "product_price": "2.00",
            "line_item_total_price": "4.00"
        },
        {
            "id": 1,
            "product_id": 3,
            "name": "product_name_03",
            "product_quantity": 3,
            "product_price": "3.00",
            "line_item_total_price": "9.00"
        },
        {
            "id": 1,
            "product_id": 4,
            "name": "product_name_04",
            "product_quantity": 4,
            "product_price": "4.00",
            "line_item_total_price": "16.00"
        }
    ];

    return <DashboardDisplay  orderData={ mockOrderData } cartData={ mockCartData } />
}