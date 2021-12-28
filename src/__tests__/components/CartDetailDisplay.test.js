// 20211228: Wireframe https://wireframe.cc/kXiUKu

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import store from '../../store'

import CartDetailDisplay from '../../components/cart/CartDetailDisplay';

import { mockCartData } from '../../utils/mockData'


// TODO: this weird data 'mount point' problem worries me...
// console.log('mockCartData', mockCartData)
// console.log('mockCartData.cart', mockCartData.cart) // this one...

const mockHandleCheckout = jest.fn()

function mockHandlers() {
    return {
        handleCheckOut: mockHandleCheckout
    }
}

describe('<CartDetailDisplay /> component tests', () => {
    beforeEach(() => render(<CartDetailDisplay data={mockCartData} handlers={mockHandlers()} />));
    // test.todo('it should not take so long...')
    it('should render a cart detail display component', () => {
        screen.getByRole('presentation', { name: /cart-detail-display/i})
    })

    it('should render cart items', () => {
        screen.getByRole('presentation', { name: /^cart-items$/i})

        let theVal = screen.getAllByRole('presentation', { name: /^cart-item$/i})
        expect(theVal).toHaveLength(4)

        theVal = screen.getAllByRole('presentation', { name: /cart-item-quantity/i})
        expect(theVal).toHaveLength(4)
        
        theVal = screen.getAllByRole('presentation', { name: /cart-item-name/i})
        expect(theVal).toHaveLength(4)
        
        theVal = screen.getAllByRole('presentation', { name: /cart-item-price/i})
        expect(theVal).toHaveLength(4)

        theVal = screen.getAllByRole('presentation', { name: /cart-item-total/i})
        expect(theVal).toHaveLength(4)
    })

    it('should render a cart total price', () => {
        screen.getByRole('presentation', { name: /cart-total-price/i})
    })

    it('should render a checkout button', () => {
        screen.getByRole('button', { name: /cart-checkout-button/i})
    })

    it('renders a snapshot', () => {
        const tree = renderer.create(<CartDetailDisplay data={mockCartData} handlers={mockHandlers()} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})