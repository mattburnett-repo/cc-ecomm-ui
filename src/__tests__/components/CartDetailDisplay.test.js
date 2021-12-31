// 20211228: Wireframe https://wireframe.cc/kXiUKu

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CartDetailDisplay from '../../components/cart/CartDetailDisplay';

import { mockCurrentCartData } from '../../utils/mockData'


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
    beforeEach(() => render(<CartDetailDisplay data={mockCurrentCartData} handlers={mockHandlers()} />));
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
        
        theVal = screen.getAllByRole('img', { name: /product-image/i})
        expect(theVal).toHaveLength(4)
        theVal = screen.getAllByRole('presentation', { name: /cart-item-name/i})
        expect(theVal).toHaveLength(4)
        
        theVal = screen.getAllByRole('presentation', { name: /cart-item-price/i})
        expect(theVal).toHaveLength(4)

        theVal = screen.getAllByRole('presentation', { name: /cart-item-total/i})
        expect(theVal).toHaveLength(4)
    })

    test.todo('should render a cart total price')
    // it('should render a cart total price', () => {
    //     screen.getByRole('presentation', { name: /cart-total-price/i})
    // })

    it('should render Go Back buttons', () => {
        let theVal = screen.getAllByRole('button', { name: /cart-detail-go-back-button/i})
        expect(theVal).toHaveLength(2)
    })

    it('should render two checkout buttons', () => {
        let theVal = screen.getAllByRole('button', { name: /cart-checkout-button/i})
        expect(theVal).toHaveLength(2)
    })

    it('renders a snapshot', () => {
        const tree = renderer.create(<CartDetailDisplay data={mockCurrentCartData} handlers={mockHandlers()} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})