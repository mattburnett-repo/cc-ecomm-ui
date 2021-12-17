// 20211217: any wireframe will do...

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import NavBar from '../../components/nav/NavBar';

describe('<NavBar /> component tests', () => {
    beforeEach(() => render(<NavBar />));

    it('should display a header message', () => {
        screen.getByRole('presentation', {name: /header-message/i});
    });
    it('should display a home button if user is not on landing page', () => {
        expect(true).toBeFalsy();
    });
    it('should display a show cart button if user is not on landing page', () => {
        expect(true).toBeFalsy();
    });
    it('should display a checkout button if user is on the cart page', () => {
        expect(true).toBeFalsy();
    });
    it('should display a cancel button if user is on the shipping info or payment info pages', () => {
        expect(true).toBeFalsy();
    });
    it('should display a logout button', () => {
        screen.getByRole('button', {name: /logout/i});
    });

}); // end component

describe('<NavBar /> feature tests', () => {
    beforeEach(() => render(<NavBar />));

    it('doesnt do anything yet', () => {
        expect(true).toBeFalsy();
    });

    it('renders a snapshot', () => {
        const tree = renderer.create(<NavBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
}); // end feature

describe('<NavBar /> unit / functional tests', () => {
    beforeEach(() => render(<NavBar />));

    it('doesnt do anything yet', () => {
        expect(true).toBeFalsy();
    })
}); // end component