// 20211217: Wireframe https://wireframe.cc/oEvbL9

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import DashboardDisplay from '../../components/dashboard/DashboardDisplay';

import { mockOrderData, mockCartData } from '../../utils/mockData'

describe('<DashboardDisplay /> component tests', () => {
    beforeEach(() => render(<DashboardDisplay orderData={ mockOrderData } cartData={ mockCartData } />));

    // it('should greet user', () => {
    //     screen.getByRole('presentation', {name: /user-greeting/i});
    // });
    it('should render a NavBar', () => {
        screen.getByRole('presentation', {name: /nav-bar/i});
    });
    it('should render browse and search', () => {
        screen.getByRole('presentation', {name: /browse-search/i});
    });
    it('should render orders', () => {
        screen.getByRole('presentation', {name: /orders/i});
    });
    it('should render carts', () => {
        screen.getByRole('presentation', {name: /carts/i});
    });
}); // end component

