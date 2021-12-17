// 20211217: Wireframe https://wireframe.cc/kXiUKu

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import Cart from '../../components/cart/Cart';

describe('<Cart /> component tests', () => {
    beforeEach(() => render(<Cart />));

    it('should display cart items', () => {
        screen.getByRole('presentation', {name: /cart-items/i});
    });
    it('should display cart total price', () => {
        screen.getByRole('presentation', {name: /cart-total-price/i});
    });
    it('should display a checkout button', () => {
        screen.getByRole('button', {name: /checkout-button/i});
    });
}); // end component

describe('<Cart /> feature tests', () => {
    beforeEach(() => render(<Cart />));

    it('does something else?', () => {
        expect(true).toBeFalsy();
    })

    it('creates a snapshot', () => {
        const tree = renderer.create(<Cart />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature

describe('<Cart /> unit / functional tests', () => {
    beforeEach(() => render(<Cart />));

    it('clicks the checkout button', () => {
        const theVal = screen.getByRole('button', {name: /checkout-button/i});
        fireEvent.click(theVal);
    });
}); // end unit / functional
