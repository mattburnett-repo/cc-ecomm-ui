// https://css-tricks.com/writing-tests-for-react-applications-using-jest-and-enzyme/

module.exports = {
    // someday I will figure out how to do this correctly...
    // getUserData: jest.fn(() => {
    //   return Promise.resolve({
    //   data: [
    //     {
    //       id: 1,
    //       username: 'asdf',
    //       email: 'asdf@asdf.com',
    //       password: 'asdf'
    //     }
    //   ]
    //   })
    // }),
    mockCartsData:[
        {
          "cart": {
              "cart_id": 1,
              "user_id": 1,
              "cart_items": [
                  {
                      "product_id": 1,
                      "product_name": "hedgehog",
                      "product_price": 1,
                      "product_quantity": 1,
                      "product_total_price": 1
                  },
                  {
                      "product_id": 2,
                      "product_name": "maine coon cat",
                      "product_price": 2,
                      "product_quantity": 2,
                      "product_total_price": 4
                  },
                  {
                      "product_id": 3,
                      "product_name": "bulldog",
                      "product_price": 3,
                      "product_quantity": 3,
                      "product_total_price": 9
                  },
                  {
                      "product_id": 4,
                      "product_name": "bunny",
                      "product_price": 4,
                      "product_quantity": 4,
                      "product_total_price": 16
                  }
              ],
              "cart_total_price": {
                  "sum": 30,
                  "cart_id": 1
              }
          }
      }
    ],
    mockCartData: {
      cart: {
        cart_id: 1,
        user_id: 1,
        cart_items: [
          {
            product_id: 1,
            product_name: 'hedgehog',
            product_price: 1,
            product_quantity: 1,
            product_total_price: 1
          },
          {
            product_id: 2,
            product_name: 'maine coon cat',
            product_price: 2,
            product_quantity: 2,
            product_total_price: 4
          },
          {
            product_id: 3,
            product_name: 'bulldog',
            product_price: 3,
            product_quantity: 3,
            product_total_price: 9
          },
          {
            product_id: 4,
            product_name: 'bunny',
            product_price: 4,
            product_quantity: 4,
            product_total_price: 16
          }
      ],
      cart_total_price: { sum: 30, cart_id: 1 }
    }},
    mockOrderData: [{
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
      }],
    mockOrderConfirmationData:
      {
        "order_id": 1,
        "total_amount": 1234,
        "order_date": '12-Dez-2021',
        "payment_type": 'Deutschmarks',
        "delivery_address": '123 Katzendamm, 90210 Berlin DE'
      },
    mockProductCategories: [
        // {
        //   "category_id": 0,
        //   "description": "Please select a product category"
        // },
        {
          "category_id": 4,
          "description": "Auto"
        },
        {
            "category_id": 3,
            "description": "Health"
        },
        {
            "category_id": 1,
            "description": "Pets"
        },
        {
            "category_id": 2,
            "description": "Tech"
        }
      ],
    mockProduct:[
        {
          "id": 2,
          "category_id": 2,
          "name": "product_name_02",
          "description": "product_desc_02",
          "image_url": "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_1280.jpg",
          "price": "2.00"
        },      
      ],
    mockProducts: [
        {
            "id": 1,
            "category_id": 1,
            "name": "product_name_01",
            "description": "product_desc_01",
            "image_url": "https://pixabay.com/images/id-71282/",
            "price": "1.00"
        },
        {
            "id": 2,
            "category_id": 2,
            "name": "product_name_02",
            "description": "product_desc_02",
            "image_url": "http://www.image.com/item/2",
            "price": "2.00"
        },
        {
            "id": 3,
            "category_id": 3,
            "name": "product_name_03",
            "description": "product_desc_03",
            "image_url": "http://www.image.com/item/3",
            "price": "3.00"
        },
        {
            "id": 4,
            "category_id": 4,
            "name": "product_name_04",
            "description": "product_desc_04",
            "image_url": "http://www.image.com/item/4",
            "price": "4.00"
        }
    ],
    mockUserData:[
      {
        "id": 4,
        "user_name": "asdf",
        "password": "$2b$10$OsTX1L59rYgsmAnsrJsXoO3RH3RSfLgEF53YBB3723B9eoELtUa.a",
        "email": "asdf@asdf.com",
        "google_id": null,
        "google_display_name": null,
        "google_first_name": null,
        "google_last_name": null,
        "google_image": null
      }
    ]
  } // end module.exports