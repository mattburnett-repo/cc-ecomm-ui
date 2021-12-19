// 20211217: Wireframe https://wireframe.cc/KF5blD

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import OrderConfirmationDisplay from '../../components/order/OrderConfirmationDisplay';

import { mockOrderConfirmationData } from '../../utils/mockData'

describe('<OrderConfirmationDisplay data={mockData} /> component tests', () => {
    beforeEach(() => render(<OrderConfirmationDisplay data={mockOrderConfirmationData} />));

    it('should render confirmation info', () => {
        screen.getByRole('presentation', {name: /confirmation-info/i});
    });
    it('should render a home button', () => {
        screen.getByRole('button', {name: /home/i});
    });
    it('should render a logout button', () => {
        screen.getByRole('button', {name: /logout/i});
    });

    it('creates a snapshot', () => {
        const tree = renderer.create(<OrderConfirmationDisplay data={mockOrderConfirmationData} />).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end component
