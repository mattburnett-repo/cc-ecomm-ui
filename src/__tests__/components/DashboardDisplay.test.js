// 20211217: Wireframe https://wireframe.cc/oEvbL9

// FIXME: these includes should be in a utils file
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux'
import store from '../../store'

import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import DashboardDisplay from '../../components/dashboard/DashboardDisplay';

import { mockOrderData, mockCartData } from '../../utils/mockData'

describe('<DashboardDisplay /> component tests', () => {
    // test.todo('there are test problems with the history.push call in CheckLoginStatus. Fix this someday')
    // here is a solution path:
    //      https://testing-library.com/docs/example-react-router/
    const mockHistory = createMemoryHistory()
    mockHistory.push('/')

    beforeEach(() => render(<ThemeProvider theme= { theme }><Provider store={store}><Router history={mockHistory}><DashboardDisplay cartData={ mockCartData } /></Router></Provider></ThemeProvider>));

    it('should render a NavBar', () => {
        screen.getByRole('presentation', {name: /nav-bar-container/i});
    });

    test.todo('there are two components (Orders / Cart History and Products Listing) that don\'t render on startup')

    // this is now in ProductsListing...
    // it('should render browse and search', () => {
    //     screen.getByRole('presentation', {name: /browse-search/i});
    // });

    // these are now in a collapsed / not-rendered-at-startup component -> OrdersAndCartsHistoryDisplay
    // it('should render orders', () => {
    //     screen.getByRole('presentation', {name: /orders/i});
    // });
    // it('should render carts', () => {
    //     screen.getByRole('presentation', {name: /carts/i});
    // });

    // this is now in a collapsed / not-rendered-at-startup component -> ProductsListing
    // it('should render products listing', () => {
    //     screen.getByRole('presentation', {name: /^products$/i});
    // })

    it('renders a snapshot', () => {
        const tree = renderer.create(<ThemeProvider theme= { theme }><Provider store={store}><Router history={mockHistory}><DashboardDisplay cartData={ mockCartData } /></Router></Provider></ThemeProvider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
}); // end component

