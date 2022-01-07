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
    mockCartsData: [
      {
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
          cart_total_price: {
            sum: 30,
            cart_id: 1
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
    mockCurrentCartData: [
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
    mockProduct:{
        "id": 10,
        "category_id": 2,
        "name": "glowing cube",
        "description": "prod desc 02",
        "image_url": "https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010__340.jpg",
        "price": "1.00"
     },
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
    ],
    mockStripePaymentResult:  {
      charge: {
        id: 'ch_3KFE8HHtApZFXC0d1UUnmGqY',
        object: 'charge',
        amount: 1234,
        amount_captured: 1234,
        amount_refunded: 0,
        application: null,
        application_fee: null,
        application_fee_amount: null,
        balance_transaction: 'txn_3KFE8HHtApZFXC0d1pfFuv9X',
        billing_details: { address: [Object], email: null, name: null, phone: null },
        calculated_statement_descriptor: 'MATT BURNETT',
        captured: true,
        created: 1641545349,
        currency: 'usd',
        customer: null,
        description: null,
        destination: null,
        dispute: null,
        disputed: false,
        failure_code: null,
        failure_message: null,
        fraud_details: {},
        invoice: null,
        livemode: false,
        metadata: {},
        on_behalf_of: null,
        order: null,
        outcome: {
          network_status: 'approved_by_network',
          reason: null,
          risk_level: 'normal',
          risk_score: 2,
          seller_message: 'Payment complete.',
          type: 'authorized'
        },
        paid: true,
        payment_intent: null,
        payment_method: 'card_1KFE8GHtApZFXC0dLz4kxOZV',
        payment_method_details: { card: [Object], type: 'card' },
        receipt_email: 'customer@example.com',
        receipt_number: null,
        receipt_url: 'https://pay.stripe.com/receipts/acct_1JbXRXHtApZFXC0d/ch_3KFE8HHtApZFXC0d1UUnmGqY/rcpt_Kv4GSnA1IqOMvSiL7YFwjeZc7YK42DW',
        refunded: false,
        refunds: {
          object: 'list',
          data: [],
          has_more: false,
          total_count: 0,
          url: '/v1/charges/ch_3KFE8HHtApZFXC0d1UUnmGqY/refunds'
        },
        review: null,
        shipping: null,
        source: {
          id: 'card_1KFE8GHtApZFXC0dLz4kxOZV',
          object: 'card',
          address_city: null,
          address_country: null,
          address_line1: null,
          address_line1_check: null,
          address_line2: null,
          address_state: null,
          address_zip: null,
          address_zip_check: null,
          brand: 'Visa',
          country: 'US',
          customer: null,
          cvc_check: 'pass',
          dynamic_last4: null,
          exp_month: 4,
          exp_year: 2024,
          fingerprint: '1toY21hGDpICnr5S',
          funding: 'credit',
          last4: '4242',
          metadata: {},
          name: null,
          tokenization_method: null
        },
        source_transfer: null,
        statement_descriptor: null,
        statement_descriptor_suffix: null,
        status: 'succeeded',
        transfer_data: null,
        transfer_group: null
      },
      message: 'charge posted successfully'
    }
  } // end module.exports