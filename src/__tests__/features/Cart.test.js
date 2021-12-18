
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import CartDisplay from '../../components/cart/CartDisplay';

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

describe('<CartDisplay cartData={mockCartData} /> feature tests', () => {
    beforeEach(() => render(<CartDisplay cartData={mockCartData} />));

    it('shows cart and user info from data', () => {
        let theVal = screen.getByRole('presentation', { name: /cart-header/i });
        expect(theVal).toHaveTextContent('cart_id:');
        expect(theVal).toHaveTextContent('user_id:');
    })
    it('shows cart items from data', () => {
        let theVal = screen.getAllByRole('presentation', { name: /^cart-item$/i });
        expect(theVal).toHaveLength(4);
    })
    it('shows cart item quantity', () => {
        // TODO: needs to get specific row / value, compare to original test val, change it, companre again
        // then the prices / totals need to update
        let theVal = screen.getAllByRole('textbox', { name: /^product-quantity$/i });
        expect(theVal).toHaveLength(4);
    })
    it('shows cart total from data', () => {
        let theVal = screen.getByRole('presentation', { name: /cart-total-price/i });
        expect(theVal).toHaveTextContent(30);
    })
    it('creates a snapshot', () => {
        const tree = renderer.create(<CartDisplay cartData={mockCartData} />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature

describe('<CartDisplay cartData={mockCartData} /> unit / functional tests', () => {
    beforeEach(() => render(<CartDisplay cartData={mockCartData} />));

    // TODO: don't forget about this...u
    // it('changes a product quantity value', () => {
    //     expect(true).toBeFalsy();
    // })
    it('clicks the checkout button', () => {
        const theVal = screen.getByRole('button', {name: /checkout-button/i});
        fireEvent.click(theVal);
    });
}); // end unit / functional