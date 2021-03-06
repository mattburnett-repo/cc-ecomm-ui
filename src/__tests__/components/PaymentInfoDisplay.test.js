// 20211217: Wireframe https://wireframe.cc/nx8Dv9

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import PaymentInfoDisplay from '../../components/payments/PaymentInfoDisplay';

describe('<PaymentInfo /> component tests', () => {
    // test.todo('fix unexplainable problems')
    // beforeEach(() => render(<ThemeProvider theme= { theme }><PaymentInfoDisplay  /></ThemeProvider>));

    // it('should render', () => {
    //     screen.getByRole('presentation', { name: /payment-info/i})
    // })
    // it('should render cart / order summary', () => {
    //     screen.getByRole('presentation', { name: /cart-summary-info/i} )
    // })
    // it('should render shipping summary', () => {
    //     screen.getByRole('presentation', { name: /shipping-summary-info/i} )
    // })

    test.todo('Payment data capture is performed by Stripe elements. These items / elements are injected, and I can\'t figure out how to test them using RTL');

    // it('should render a payment types selector', () => {
    //     screen.getByRole('presentation', { name: /^payment-types$/i })
    // })
    // it('should select a payment type', () => {
    //     fireEvent.change(screen.getByRole('presentation', {name: /payment-types-selector/i}), { target: { value: 2 } })
    //     let options = screen.getByRole('presentation', {name: /payment-types-selector/i});
    //     expect(options[0].selected).toBeFalsy();
    //     expect(options[1].selected).toBeTruthy();
    //     expect(options[2].selected).toBeFalsy();
    //     expect(options[3].selected).toBeFalsy();
    //     expect(options[4].selected).toBeFalsy();
    // });

    // it('should display and accept a name on card', () => {
    //     const theElement = screen.getByRole('textbox', {name: /name-on-card/i});
    //     userEvent.type(theElement, 'name-on-card');
        
    //     expect(theElement).toHaveValue('name-on-card');
    // });
    // it('should display and accept a card number', () => {
    //     const theElement = screen.getByRole('textbox', {name: /card-number/i});
    //     userEvent.type(theElement, '1234 1234 1234 1234');
        
    //     expect(theElement).toHaveValue('1234 1234 1234 1234');
    // });
    // it('should display and accept an expiration date', () => {
    //     const theElement = screen.getByRole('textbox', {name: /expiration-date/i});
    //     userEvent.type(theElement, '01/2022');
        
    //     expect(theElement).toHaveValue('01/2022');
    // });
    // it('should display and accept a cvc number', () => {
    //     const theElement = screen.getByRole('textbox', {name: /cvc-number/i});
    //     userEvent.type(theElement, '1234');
        
    //     expect(theElement).toHaveValue('1234');
    // });
    // it('should display and accept a postal code', () => {
    //     const theElement = screen.getByRole('textbox', {name: /postal-code/i});
    //     userEvent.type(theElement, 'BR 549');
        
    //     expect(theElement).toHaveValue('BR 549');
    // });

    // it('should display and click a save payment info button', () => {
    //     let theVal = screen.getByRole('button', {name: /save-payment-info/i});
    //     fireEvent.submit(theVal);
    // })
    // it('should display and click a finish order button', () => {
    //     let theVal = screen.getByRole('button', {name: /finish-order/i});
    //     fireEvent.submit(theVal);
    // });

    // it('creates a snapshot', () => {
    //     const tree = renderer.create(<ThemeProvider theme= { theme }><PaymentInfoDisplay /></ThemeProvider>).toJSON();
    //     expect(tree).toMatchSnapshot();  
    // });
}); // end component
