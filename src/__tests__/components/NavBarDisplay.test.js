// 20211217: any wireframe will do...

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux'
import store from '../../store'

import NavBarDisplay from '../../components/nav/NavBarDisplay';

// FIXME: need a better way to keep track of cart_items count. this is an inadequate stub
function mockCurrentCart() { 
    return 0 // we just want to mock the length of the (empty) cart_items array
}

function mockHandlers() {
    return {
        handleHomeClick: jest.fn(),
        handleShowCartClick: jest.fn(),
        handleCheckoutClick: jest.fn(),
        handleCancelClick: jest.fn(),
        handleLogoutClick: jest.fn()
    }
}

describe('<NavBarDisplay /> component tests', () => {
    it('should display a header message', () => { // TODO: check other components that have header messages, and refactor to here
        render(<NavBarDisplay calledFrom="" currentCart={mockCurrentCart()} handlers={mockHandlers()} />);
        screen.getByRole('presentation', {name: /header-message/i});
        // TODO: test conditional header messages in feature tests
    });
    it('should render CurrentCart info', () => {
        render(<NavBarDisplay calledFrom="" currentCart={mockCurrentCart()} handlers={mockHandlers()} />);
        screen.getByRole('presentation', { name: /current-cart-display/i})
    })
    it('should display a logout button', () => {
        render(<NavBarDisplay calledFrom="" currentCart={mockCurrentCart()} handlers={mockHandlers()} />);
        screen.getByRole('button', {name: /logout/i});
    });

    it('renders a snapshot', () => {
        const tree = renderer.create(<NavBarDisplay currentCart={mockCurrentCart()} handlers={mockHandlers()}  />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders a home button if user is not on dashboard', () => {
        render(<NavBarDisplay calledFrom="login" currentCart={mockCurrentCart()} handlers={mockHandlers()} />);
        screen.getByRole('button', { name: /home/i});
    });
    it('renders a show cart button if user is not on dashboard', () => {
        render(<NavBarDisplay calledFrom="login" currentCart={mockCurrentCart()} handlers={mockHandlers()} />);
        screen.getByRole('button', { name: /show-cart/i});
    });
    it('renders a checkout button if user is on the cart page', () => {
        render(<NavBarDisplay calledFrom="cart" currentCart={mockCurrentCart()} handlers={mockHandlers()} />);
        screen.getByRole('button', { name: /show-cart/i});
    });
    it('renders a cancel button if user is on the shipping info page', () => {
        render(<NavBarDisplay calledFrom="shippingInfo" currentCart={mockCurrentCart()} handlers={mockHandlers()} />);
        screen.getByRole('button', { name: /cancel/i});
    });
    it('renders a cancel button if user is on the payment info page', () => {
        render(<NavBarDisplay calledFrom="paymentInfo" currentCart={mockCurrentCart()} handlers={mockHandlers()} />);
        screen.getByRole('button', { name: /cancel/i});
    });
}); // end conditional component

describe('<NavBarDisplay /> unit / functional tests', () => {
    it('renders and clicks a home button if user is not on dashboard', () => {
        render(<Provider store={store}>
                    <NavBarDisplay calledFrom="login" currentCart={mockCurrentCart()} handlers={mockHandlers()} />
                </ Provider>);

        const theVal = screen.getByRole('button', { name: /home/i});
        fireEvent.click(theVal);
    });

    it('renders and clicks a show cart button if user is not on dashboard', () => {
        render(<Provider store={store}>
                    <NavBarDisplay calledFrom="login" currentCart={mockCurrentCart()} handlers={mockHandlers()} />
                </Provider>);

        const theVal = screen.getByRole('button', { name: /show-cart/i});
        fireEvent.click(theVal);
    });

    it('renders and clicks a checkout button if user is on the cart page', () => {
        render(<Provider store={store}>
                    <NavBarDisplay calledFrom="cart" currentCart={mockCurrentCart()} handlers={mockHandlers()} />
                </Provider>);

        const theVal = screen.getByRole('button', { name: /checkout/i});
        fireEvent.click(theVal);
    });

    it('renders and clicks a cancel button if user is on the shipping info page', () => {
        render(<Provider store={store}>
                    <NavBarDisplay calledFrom="shippingInfo" currentCart={mockCurrentCart()} handlers={mockHandlers()} />
                </Provider>);

        const theVal = screen.getByRole('button', { name: /cancel/i});
        fireEvent.click(theVal);
    });
    it('renders and clicks a cancel button if user is on the payment info page', () => {
        render(<Provider store={store}>
                    <NavBarDisplay calledFrom="paymentInfo" currentCart={mockCurrentCart()} handlers={mockHandlers()} />
                </Provider>);

        const theVal = screen.getByRole('button', { name: /cancel/i});
        fireEvent.click(theVal);
    });
    it('renders and clicks a logout button', () => {
        render(<Provider store={store}>
                    <NavBarDisplay calledFrom="dashboard" currentCart={mockCurrentCart()} handlers={mockHandlers()} />
                </Provider>);

        const theVal = screen.getByRole('button', { name: /logout/i});
        fireEvent.click(theVal);
    });
}); // end unit / functiional