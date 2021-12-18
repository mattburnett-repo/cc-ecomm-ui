// 20211217: Wireframe https://wireframe.cc/kXiUKu

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import CartDisplay from '../../components/cart/CartDisplay';

// need mock data in the test once component implements features
// feature test provides mock data, which should eventually come from API / Redux
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
      ],
      "cart_total_price": {
        "sum": 30,
        "cart_id": 1
      }
    }
  }
];

describe('<CartDisplay cartData={mockCartData} /> component tests', () => {
    beforeEach(() => render(<CartDisplay cartData={mockCartData} />));

    it('should render nav bar', () => {
      screen.getByRole('presentation', {name: /nav-bar/i});
    });
    it('should render cart items', () => {
        screen.getAllByRole('presentation', {name: /cart-items/i});
        screen.getAllByRole('textbox', { name: /product-quantity/i });
    });
    it('should render cart total price', () => {
        screen.getByRole('presentation', {name: /cart-total-price/i});
    });
    it('should render a checkout button', () => {
        screen.getByRole('button', {name: /checkout-button/i});
    });

    it('creates a snapshot', () => {
      const tree = renderer.create(<CartDisplay cartData={mockCartData} />).toJSON();
      expect(tree).toMatchSnapshot();  
  });
}); // end component
