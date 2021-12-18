import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import OrderConfirmation from '../../features/order/orderConfirmation';

describe('<OrderConfirmation /> feature tests', () => {
    beforeEach(() => render(<OrderConfirmation  />));

    it('creates a snapshot', () => {
        const tree = renderer.create(<OrderConfirmation />).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end feature

describe('<OrderConfirmationDisplay data={mockData} /> unit / functional tests', () => {
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