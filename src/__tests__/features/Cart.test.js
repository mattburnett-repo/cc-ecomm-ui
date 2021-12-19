
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import Cart from '../../features/cart/cart';

describe('<Cart /> feature tests', () => {
    beforeEach(() => render(<Cart />));

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
        const tree = renderer.create(<Cart />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature

describe('<Cart /> unit / functional tests', () => {
    beforeEach(() => render(<Cart />));

    // TODO: don't forget about this...u
    // it('changes a product quantity value', () => {
    //     expect(true).toBeFalsy();
    // })
    it('clicks the checkout button', () => {
        const theVal = screen.getByRole('button', {name: /checkout-button/i});
        fireEvent.click(theVal);
    });
}); // end unit / functional