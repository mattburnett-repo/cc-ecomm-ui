import { Provider } from 'react-redux';
import store from '../../store'

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import OrderConfirmation from '../../features/order/orderConfirmation';

describe('<OrderConfirmation /> feature tests', () => {

    test.todo('update OrderConfirmation tests to reflect updated design / data')
    // beforeEach(() => render(<Provider store={store}><OrderConfirmation  /></Provider>));
    
    // it('should display order amount and date', () => {
    //     let theVal = screen.getByRole('presentation', { name: /order-amount-date/i});
        
    //     expect(theVal).toHaveTextContent('1234');
    //     expect(theVal).toHaveTextContent('12-Dez-2021');
    // });
    // it('should display order payment info', () => {
    //     let theVal = screen.getByRole('presentation', { name: /order-payment/i});
        
    //     expect(theVal).toHaveTextContent('1234');
    //     expect(theVal).toHaveTextContent('Deutschmarks');
    // });
    // it('should display order number', () => {
    //     let theVal = screen.getByRole('presentation', { name: /order-number/i});
        
    //     expect(theVal).toHaveTextContent('1');
    // });
    // it('should display order devlivery info', () => {
    //     let theVal = screen.getByRole('presentation', { name: /order-delivery/i});
        
    //     expect(theVal).toHaveTextContent('123 Katzendamm, 90210 Berlin DE');
    // });
    // it('creates a snapshot', () => {
    //     const tree = renderer.create(<Provider store={store}><OrderConfirmation  /></Provider>).toJSON();
    //     expect(tree).toMatchSnapshot();  
    // });
}); // end feature

describe('<OrderConfirmationDisplay data={mockData} /> unit / functional tests', () => {

    test.todo('update OrderConfirmation tests to reflect updated design / data')
    
    // beforeEach(() => render(<Provider store={store}><OrderConfirmation  /></Provider>));

    // it('clicks the home button', () => {
    //     const theVal = screen.getByRole('button', {name: /home/i});
    //     fireEvent.click(theVal);
    // });
    // it('clicks the logout button', () => {
    //     const theVal = screen.getByRole('button', {name: /logout/i});
    //     fireEvent.click(theVal);
    // });
}); // end unit / functional