// 20211217: any wireframe will do...

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import NavBar from '../../components/nav/NavBar';

describe('<NavBar /> component tests', () => {
    beforeEach(() => render(<NavBar />));

    it('should display a header message', () => { // TODO: check other components that have header messages, and refactor to here
        screen.getByRole('presentation', {name: /header-message/i});
    });
    it('should display a logout button', () => {
        screen.getByRole('button', {name: /logout/i});
    });
}); // end component

describe('<NavBar /> feature tests', () => {
    it('renders a snapshot', () => {
        const tree = renderer.create(<NavBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
}); // end feature

describe('<NavBar /> unit / functional tests', () => {
    it('displays and clicks a home button if user is not on landing page', () => {
        render(<NavBar calledFrom="login" />);
        
        const theVal = screen.getByRole('button', { name: /home/i});
        fireEvent.click(theVal);
    });

    it('displays and clicks a show cart button if user is not on landing page', () => {
        render(<NavBar calledFrom="login" />);

        const theVal = screen.getByRole('button', { name: /show-cart/i});
        fireEvent.click(theVal);
    });

    it('displays and clicks a checkout button if user is on the cart page', () => {
        render(<NavBar calledFrom="cart" />);

        const theVal = screen.getByRole('button', { name: /show-cart/i});
        fireEvent.click(theVal);
    });

    it('displays and clicks a cancel button if user is on the shipping info page', () => {
        render(<NavBar calledFrom="shippingInfo" />);

        const theVal = screen.getByRole('button', { name: /cancel/i});
        fireEvent.click(theVal);
    });
    it('displays and clicks a cancel button if user is on the payment info page', () => {
        render(<NavBar calledFrom="paymentInfo" />);

        const theVal = screen.getByRole('button', { name: /cancel/i});
        fireEvent.click(theVal);
    });
}); // end component