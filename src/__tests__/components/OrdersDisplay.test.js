// 20211222 references wireframe: https://wireframe.cc/oEvbL9

import { render, screen, fireEvent } from '@testing-library/react';
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
    test.todo('fix unexplainable problems')
    
    // beforeEach(() => render(<ThemeProvider theme= { theme }><OrdersDisplay ordersData={mockOrderData} handlers={mockHandlers()}/></ThemeProvider>));

    // it('should render a component', () => {
    //     screen.getByRole('presentation', { name: /^orders$/i})
    // })
    // it('should render order items from mock data', () => {
    //     const theVals = screen.getAllByRole('presentation', { name: /^order-item$/i})

    //     expect(theVals).toHaveLength(1)
    //     expect(theVals[0]).toHaveTextContent('order_id')
    //     expect(theVals[0]).toHaveTextContent('user_id')
    //     expect(theVals[0]).toHaveTextContent('order_date')
    //     expect(theVals[0]).toHaveTextContent('total_price')
    // })
    // it('should render the order data as a button to order detail', () => {
    //     const theVals = screen.getAllByRole('button', { name: /^go-to-order$/i })

    //     expect(theVals).toHaveLength(1)
    // })
    // it('should click the order button', () => {
    //     mockHandleOrderClick.mockImplementation((e) => {e.preventDefault()});
    //     const theVal = screen.getByRole('button', { name: /^go-to-order$/i })
    //     fireEvent.click(theVal);

    //     // expect(mockHandleClick.mock.calls.length).toBe(1);
    // })

    // it('creates a snapshot', () => {
    //     const tree = renderer.create(<ThemeProvider theme= { theme }><OrdersDisplay ordersData={mockOrderData}  handlers={mockHandlers()} /></ThemeProvider>).toJSON();
    //     expect(tree).toMatchSnapshot();  
    // });
}) // end component