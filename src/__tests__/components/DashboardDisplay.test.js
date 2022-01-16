// 20211217: Wireframe https://wireframe.cc/oEvbL9

// FIXME: these includes should be in a utils file
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux'
import store from '../../store'

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import DashboardDisplay from '../../components/dashboard/DashboardDisplay';

import { mockOrderData, mockCartData } from '../../utils/mockData'

describe('<DashboardDisplay /> component tests', () => {
    test.todo('there are test problems with the history.push call in CheckLoginStatus. Fix this someday')
    // beforeEach(() => render(<ThemeProvider theme= { theme }><Provider store={store}><DashboardDisplay cartData={ mockCartData } /></Provider></ThemeProvider>));

    // it('should render a NavBar', () => {
    //     screen.getByRole('presentation', {name: /nav-bar/i});
    // });
    // it('should render browse and search', () => {
    //     screen.getByRole('presentation', {name: /browse-search/i});
    // });
    // it('should render orders', () => {
    //     screen.getByRole('presentation', {name: /orders/i});
    // });
    // it('should render carts', () => {
    //     screen.getByRole('presentation', {name: /carts/i});
    // });
    // it('should render products listing', () => {
    //     screen.getByRole('presentation', {name: /^products$/i});
    // })

    // it('renders a snapshot', () => {
    //     const tree = renderer.create(<ThemeProvider theme= { theme }><Provider store={store}><DashboardDisplay cartData={ mockCartData } /></Provider></ThemeProvider>).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
}); // end component

