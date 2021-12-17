// 20211217: Wireframe https://wireframe.cc/KF5blD

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import OrderConfirmation from '../../components/order/OrderConfirmation';

describe('<OrderConfirmation /> component tests', () => {
    beforeEach(() => render(<OrderConfirmation />));

    it('should display confirmation info', () => {
        screen.getByRole('presentation', {name: /confirmation-info/i});
    });
    it('should display a home button', () => {
        screen.getByRole('button', {name: /home/i});
    });
    it('should display a logout button', () => {
        screen.getByRole('button', {name: /logout/i});
    });
}); // end component

describe('<OrderConfirmation /> feature tests', () => {
    beforeEach(() => render(<OrderConfirmation />));

    it('creates a snapshot', () => {
        const tree = renderer.create(<OrderConfirmation />).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end feature

describe('<OrderConfirmation /> unit / functional tests', () => {
    beforeEach(() => render(<OrderConfirmation />));

    it('clicks the home button', () => {
        const theVal = screen.getByRole('button', {name: /home/i});
        fireEvent.click(theVal);
    });
    it('clicks the logout button', () => {
        const theVal = screen.getByRole('button', {name: /logout/i});
        fireEvent.click(theVal);
    });
}); // end unit / functional