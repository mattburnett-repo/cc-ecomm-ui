export default function orderData() {
    return ([{
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
    }])
};