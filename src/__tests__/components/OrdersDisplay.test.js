// 20211222 references wireframe: https://wireframe.cc/oEvbL9

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import { mockOrderData } from '../../utils/mockData';
import OrdersDisplay from '../../components/orders/OrdersDisplay'

const mockHandleOrderClick = jest.fn()

function mockHandlers () {
    return {
        handleOrderClick: mockHandleOrderClick
    }
}

describe('<OrdersDisplay orderData={mockOrderData} /> component tests', () => {    
    beforeEach(() => render(<ThemeProvider theme= { theme }><OrdersDisplay ordersData={mockOrderData} handlers={mockHandlers()}/></ThemeProvider>));

    it('should render a component', () => {
        screen.getByRole('presentation', { name: /^orders$/i})
    })
    // it('should render an order item from mock data', () => {
    //     const theVals = screen.getAllByRole('presentation', { name: /^order-item$/i})

    //     expect(theVals).toHaveLength(1)
    // })

    it('creates a snapshot', () => {
        const tree = renderer.create(<ThemeProvider theme= { theme }><OrdersDisplay ordersData={mockOrderData}  handlers={mockHandlers()} /></ThemeProvider>).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}) // end component