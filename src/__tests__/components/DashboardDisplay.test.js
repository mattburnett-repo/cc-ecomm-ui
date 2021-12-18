// 20211217: Wireframe https://wireframe.cc/oEvbL9

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import DashboardDisplay from '../../components/dashboard/DashboardDisplay';

const mockUserData = {
    "id": 1,
    "user_name": "username_01",
    "password": "password_01",
    "email": "1@1.com",
    "google_id": null,
    "google_display_name": null,
    "google_first_name": null,
    "google_last_name": null,
    "google_image": null
};
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
      "cart": {
        "cart_id": 1,
        "user_id": 1,
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
      }
    }
  ];

describe('<DashboardDisplay /> component tests', () => {
    beforeEach(() => render(<DashboardDisplay orderData={ mockOrderData } cartData={ mockCartData } />));

    // it('should greet user', () => {
    //     screen.getByRole('presentation', {name: /user-greeting/i});
    // });
    it('should render a NavBar', () => {
        screen.getByRole('presentation', {name: /nav-bar/i});
    });
    it('should render browse and search', () => {
        screen.getByRole('presentation', {name: /browse-search/i});
    });
    it('should render orders', () => {
        screen.getByRole('presentation', {name: /orders/i});
    });
    it('should render carts', () => {
        screen.getByRole('presentation', {name: /carts/i});
    });
}); // end component

