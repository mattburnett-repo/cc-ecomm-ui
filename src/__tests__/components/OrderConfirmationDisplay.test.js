// 20211217: Wireframe https://wireframe.cc/KF5blD

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux'
import store from '../../store'

import OrderConfirmationDisplay from '../../components/order/OrderConfirmationDisplay';

import { mockCurrentOrderData, mockCurrentPaymentData, mockCurrentAddressData } from '../../utils/mockData'

describe('<OrderConfirmationDisplay data={mockData} /> component tests', () => {

    test.todo('update OrderConfirmation tests to reflect updated design / data')
    
    // beforeEach(() => render(<Provider store={store}>
    //                             <OrderConfirmationDisplay 
    //                                 currentOrder={mockCurrentOrderData} 
    //                                 currentPayment={mockCurrentPaymentData}
    //                                 currentAddress={mockCurrentAddressData} />
    //                         </Provider>));

    // it('should render confirmation info', () => {
    //     screen.getByRole('presentation', {name: /confirmation-info/i});
    // });
    // it('should render a home button', () => {
    //     screen.getByRole('button', {name: /home/i});
    // });
    // it('should render a logout button', () => {
    //     screen.getByRole('button', {name: /logout/i});
    // });

    // it('creates a snapshot', () => {
    //     const tree = renderer.create(<Provider store={store}>
    //                                     <OrderConfirmationDisplay 
    //                                         currentOrder={mockCurrentOrderData} 
    //                                         currentPayment={mockCurrentPaymentData}
    //                                         currentAddress={mockCurrentAddressData} />
    //                                 </Provider>).toJSON();
    //     expect(tree).toMatchSnapshot();  
    // });
}); // end component
