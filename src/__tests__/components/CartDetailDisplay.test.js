// 20211228: Wireframe https://wireframe.cc/kXiUKu

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CartDetailDisplay from '../../components/cart/CartDetailDisplay';

import { mockCurrentCartData } from '../../utils/mockData'

// TODO: this weird data 'mount point' problem worries me...
// console.log('mockCartData', mockCartData)
// console.log('mockCartData.cart', mockCartData.cart) // this one...

function mockHandlers() {
    return {
        handleCheckOut: jest.fn()
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
        
        theVal = screen.getAllByRole('img', { name: /cart-item-image/i})
        expect(theVal).toHaveLength(4)

        theVal = screen.getAllByRole('presentation', { name: /cart-item-name/i})
        expect(theVal).toHaveLength(4)
        
        theVal = screen.getAllByRole('presentation', { name: /cart-item-price/i})
        expect(theVal).toHaveLength(4)

        theVal = screen.getAllByRole('presentation', { name: /cart-item-total/i})
        expect(theVal).toHaveLength(4)
    })

    it('should select a value from an item-quantity-selector element', () => {
        window.alert = () => {}; // https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
        
        let theVals = screen.getAllByRole('presentation', {name: /item-quantity-selector/i});
        expect(theVals).toHaveLength(4)

        fireEvent.change(theVals[0], { target: { value: 7 } })
        let options = theVals[0];
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeFalsy();
        expect(options[4].selected).toBeFalsy();
        expect(options[5].selected).toBeFalsy();
        expect(options[6].selected).toBeTruthy();
        expect(options[7].selected).toBeFalsy();
        expect(options[8].selected).toBeFalsy();
        expect(options[9].selected).toBeFalsy();
    });

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