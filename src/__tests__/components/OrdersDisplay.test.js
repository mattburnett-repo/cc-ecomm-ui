// 20211222 references wireframe: https://wireframe.cc/oEvbL9

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { mockOrderData } from '../../utils/mockData';
import OrdersDisplay from '../../components/orders/OrdersDisplay'

describe('<OrdersDisplay orderData={mockOrderData} /> component tests', () => {
    beforeEach(() => render(<OrdersDisplay ordersData={mockOrderData} />));

    it('should render a component', () => {
        screen.getByRole('presentation', { name: /^orders$/i})
    })
    it('should render order items from mock data', () => {
        const theVals = screen.getAllByRole('presentation', { name: /^order$/i})

        expect(theVals).toHaveLength(1)
        expect(theVals[0]).toHaveTextContent('order_id')
        expect(theVals[0]).toHaveTextContent('user_id')
        expect(theVals[0]).toHaveTextContent('order_date')
        expect(theVals[0]).toHaveTextContent('total_price')
    })

    it('creates a snapshot', () => {
        const tree = renderer.create(<OrdersDisplay ordersData={mockOrderData} />).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}) // end component