// 20211217: Wireframe https://wireframe.cc/KF5blD

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import OrderConfirmationDisplay from '../../components/order/OrderConfirmationDisplay';

const mockData = "asdfasdfasdf";

describe('<OrderConfirmationDisplay data={mockData} /> component tests', () => {
    beforeEach(() => render(<OrderConfirmationDisplay data={mockData} />));

    it('should display confirmation info', () => {
        screen.getByRole('presentation', {name: /confirmation-info/i});
    });
    it('should display a home button', () => {
        screen.getByRole('button', {name: /home/i});
    });
    it('should display a logout button', () => {
        screen.getByRole('button', {name: /logout/i});
    });

    it('creates a snapshot', () => {
        const tree = renderer.create(<OrderConfirmationDisplay data={mockData} />).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end component
