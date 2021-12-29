// 20211217: Wireframe https://wireframe.cc/kXiUKu

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import CartsDisplay from '../../components/carts/CartsDisplay';

import { mockCartsData } from '../../utils/mockData'

function allCartData () {
    return {
        currentCart: mockCartsData,
        savedCarts: mockCartsData
    }
}

const mockHandleCartClick = jest.fn()

function mockHandlers () {
    return {
        handleCartClick: mockHandleCartClick
    }
}

describe('<CartsDisplay cartsData={mockCartData} handlers={mockHandlers()}/> component tests', () => {
    beforeEach(() => render(<Provider store={store}><CartsDisplay cartsData={allCartData()} handlers={mockHandlers()}/></Provider>));

    it('should render a component', () => {
        screen.getAllByRole('presentation', {name: /^carts$/i});
    });

    it('should render a cart records from mock data', () => {
        const theVals = screen.getAllByRole('presentation', {name: /^carts$/i});

        expect(theVals).toHaveLength(1)
    });
    it('should render the cart data as a button to cart detail', () => {
        const theVals = screen.getAllByRole('button', { name: /^go-to-cart$/i })

        expect(theVals).toHaveLength(1)
    })
    it('should click the cart button', () => {
        mockHandleCartClick.mockImplementation((e) => {e.preventDefault()});
        const theVal = screen.getByRole('button', { name: /^go-to-cart$/i })
        fireEvent.click(theVal);

        expect(mockHandleCartClick.mock.calls.length).toBe(1);
    })

    it('creates a snapshot', () => {
      const tree = renderer.create(<Provider store={store}><CartsDisplay cartsData={allCartData()} handlers={mockHandlers()} /></Provider>).toJSON();
      expect(tree).toMatchSnapshot();  
    });
}); // end component
