// 20211217: Wireframe https://wireframe.cc/nx8Dv9

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import PaymentInfo from '../../components/payments/PaymentInfo';

describe('<PaymentInfo /> component tests', () => {
    beforeEach(() => render(<PaymentInfo />));

    it('should display name on card', () => {
        screen.getByRole('textbox', {name: /name-on-card/i});
    });
    it('should display card number', () => {
        screen.getByRole('textbox', {name: /card-number/i});
    });
    it('should display expiration date', () => {
        screen.getByRole('textbox', {name: /expiration-date/i});
    });
    it('should display finish order button', () => {
        screen.getByRole('button', {name: /finish-order/i});
    });
}); // end component

describe('<PaymentInfo /> feature tests', () => {
    beforeEach(() => render(<PaymentInfo />));

    it('accepts name on card', () => {
        const theElement = screen.getByRole('textbox', {name: /name-on-card/i});
        userEvent.type(theElement, 'name-on-card');
        
        expect(theElement).toHaveValue('name-on-card');
    });
    it('accepts card number', () => {
        const theElement = screen.getByRole('textbox', {name: /card-number/i});
        userEvent.type(theElement, '1234 1234 1234 1234');
        
        expect(theElement).toHaveValue('1234 1234 1234 1234');
    });
    it('accepts expiration date', () => {
        const theElement = screen.getByRole('textbox', {name: /expiration-date/i});
        userEvent.type(theElement, '01/2022');
        
        expect(theElement).toHaveValue('01/2022');
    });

    it('creates a snapshot', () => {
        const tree = renderer.create(<PaymentInfo />).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end feature

describe('<PaymentInfo /> unit / functional tests', () => {
    beforeEach(() => render(<PaymentInfo />));
    
    it('clicks the finish-order button', () => {
        const theVal = screen.getByRole('button', {name: /finish-order/i});
        fireEvent.click(theVal);
    });
}); // end unit / functional