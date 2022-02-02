// 20211228: Wireframe https://wireframe.cc/kXiUKu

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux'
import store from '../../store'

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'

import CartDetailDisplay from '../../components/cart/CartDetailDisplay';

import { mockCurrentCartData } from '../../utils/mockData'

function mockHandlers() {
    return {
        handleCheckOut: jest.fn()
    }
}

describe('<CartDetailDisplay /> component tests', () => {
    beforeEach(() => render(<ThemeProvider theme= { theme }><Provider store={store}><CartDetailDisplay data={mockCurrentCartData} handlers={mockHandlers()} /></Provider></ThemeProvider>));

    it('should render cart items', () => {
        screen.getByRole('presentation', { name: /^cart-items$/i})

        let theVal = screen.getAllByRole('presentation', { name: /cart-item-container/i})
        expect(theVal).toHaveLength(4)
    })

    test.todo('it should change a product quantity and update the cart total price')

    it('renders a snapshot', () => {
        const tree = renderer.create(<ThemeProvider theme= { theme }><Provider store={store}><CartDetailDisplay data={mockCurrentCartData} handlers={mockHandlers()} /></Provider></ThemeProvider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})