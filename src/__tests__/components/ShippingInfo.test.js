// 20211217: Wireframe https://wireframe.cc/ag82hc

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import ShippingInfo from '../../components/shipping/ShippingInfo';

describe('<ShippingInfo /> component tests', () => {
    beforeEach(() => render(<ShippingInfo />));

    it('should display first name', () => {
        screen.getByRole('textbox', {name: /first-name/i});
    });
    it('should display last name', () => {
        screen.getByRole('textbox', {name: /last-name/i});
    });
    it('should display address 1', () => {
        screen.getByRole('textbox', {name: /address-1/i});
    });
    it('should display address 2', () => {
        screen.getByRole('textbox', {name: /address-2/i});
    });
    it('should display city', () => {
        screen.getByRole('textbox', {name: /city/i});
    });
    it('should display state / province', () => {
        screen.getByRole('textbox', {name: /state-province/i});
    });
    it('should display postal code', () => {
        screen.getByRole('textbox', {name: /postal-code/i});
    });
    it('should display country', () => {
        screen.getByRole('textbox', {name: /country/i});
    });
    it('should display go-to-payment-info button', () => {
        screen.getByRole('button', {name: /go-to-payment-info/i});
    });
});

describe('<ShippingInfo /> feature tests', () => {
    beforeEach(() => render(<ShippingInfo />));

    it('accepts first name', () => {
        const theElement = screen.getByRole('textbox', {name: /first-name/i});
        userEvent.type(theElement, 'first-name');
        
        expect(theElement).toHaveValue('first-name');
    });
    it('accepts last name', () => {
        const theElement = screen.getByRole('textbox', {name: /last-name/i});
        userEvent.type(theElement, 'last-name');
        
        expect(theElement).toHaveValue('last-name');
    });
    it('accepts address 1', () => {
        const theElement = screen.getByRole('textbox', {name: /address-1/i});
        userEvent.type(theElement, 'address-1');
        
        expect(theElement).toHaveValue('address-1');
    });
    it('accepts address 2', () => {
        const theElement = screen.getByRole('textbox', {name: /address-2/i});
        userEvent.type(theElement, 'address-2');
        
        expect(theElement).toHaveValue('address-2');
    });
    it('accepts city', () => {
        const theElement = screen.getByRole('textbox', {name: /city/i});
        userEvent.type(theElement, 'city');
        
        expect(theElement).toHaveValue('city');
    });
    it('accepts state / province', () => {
        const theElement = screen.getByRole('textbox', {name: /state-province/i});
        userEvent.type(theElement, 'state-province');
        
        expect(theElement).toHaveValue('state-province');
    });
    it('accepts postal code', () => {
        const theElement = screen.getByRole('textbox', {name: /postal-code/i});
        userEvent.type(theElement, 'postal-code');
        
        expect(theElement).toHaveValue('postal-code');
    });
    it('accepts country', () => {
        const theElement = screen.getByRole('textbox', {name: /country/i});
        userEvent.type(theElement, 'country');
        
        expect(theElement).toHaveValue('country');
    });

    it('creates a snapshot', () => {
        const tree = renderer.create(<ShippingInfo />).toJSON();
        expect(tree).toMatchSnapshot();  
    });
});

describe('<ShippingInfo /> unit / functional tests', () => {
    beforeEach(() => render(<ShippingInfo />));

    it('clicks the go-to-payment-info button', () => {
        const theVal = screen.getByRole('button', {name: /go-to-payment-info/i});
        fireEvent.click(theVal);
    });
})
