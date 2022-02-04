
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux'
import store from '../../store'

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'

import CartItemDisplay from '../../components/cart/CartItemDisplay';
import { mockSingleCartItem } from '../../utils/mockData'


// FIXME: should only handle quantity change, but we test that in ItemQuantity, so... ???
function mockHandlers() {
    return {
        handleCheckOut: jest.fn()
    }
}

describe('<CartItemDisplay /> component tests', () => {
    beforeEach(() => render(<ThemeProvider theme= { theme }><Provider store={store}><CartItemDisplay item={mockSingleCartItem} handlers={mockHandlers()} /></Provider></ThemeProvider>));

    it('should render item quantity element', () => {
        screen.getByRole('presentation', { name: /cart-item-quantity/i})
    })
    it('should render item image', () => {
        screen.getByRole('img', { name: /cart-item-image/i})
    })
    it('should render item name', () => {
        screen.getByRole('presentation', { name: /cart-item-name/i})      
    })
    it('should render item price', () => {
        screen.getByRole('presentation', { name: /cart-item-price/i})      
    })
    it('should render item total price', () => {
        screen.getByRole('presentation', { name: /cart-item-total/i})       
    })

    it('should select a value from an item-quantity-selector element', () => {
        window.alert = () => {}; // https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
        
        let theVal = screen.getByRole('presentation', {name: /item-quantity-selector/i});

        fireEvent.change(theVal, { target: { value: 7 } })
        let options = theVal;
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeFalsy();
        expect(options[4].selected).toBeFalsy();
        expect(options[5].selected).toBeFalsy();
        expect(options[6].selected).toBeTruthy(); // item value 7
        expect(options[7].selected).toBeFalsy();
        expect(options[8].selected).toBeFalsy();
        expect(options[9].selected).toBeFalsy();
    });

    it('should render a cart item total price', () => {
        screen.getAllByRole('presentation', { name: /cart-item-total/i})
    })

    it('should render remove-from-cart buttons', () => {
        screen.getByRole('button', { name: /remove-from-cart-button/i})
    })
    
    // can't figure out how to do this in the test. it works IRL...
    test.todo('it should change the item total price when quantity changes')
})