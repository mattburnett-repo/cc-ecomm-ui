// 20211217: Wireframe https://wireframe.cc/kXiUKu

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import CartDisplay from '../../components/cart/CartDisplay';

import { mockCartData } from '../../utils/mockData'

describe('<CartDisplay cartData={mockCartData} /> component tests', () => {
    beforeEach(() => render(<Provider store={store}><CartDisplay cartData={mockCartData} /></Provider>));

    it('should render nav bar', () => {
      screen.getByRole('presentation', {name: /nav-bar/i});
    });
    // it('should render cart items', () => {
    //     screen.getAllByRole('presentation', {name: /cart-items/i});
    //     screen.getAllByRole('textbox', { name: /product-quantity/i });
    // });
    // it('should render cart total price', () => {
    //     screen.getByRole('presentation', {name: /cart-total-price/i});
    // });
    // it('should render a checkout button', () => {
    //     screen.getByRole('button', {name: /checkout-button/i});
    // });

    // it('creates a snapshot', () => {
    //   const tree = renderer.create(<Provider store={store}><CartDisplay cartData={mockCartData} /></Provider>).toJSON();
    //   expect(tree).toMatchSnapshot();  
    // });
}); // end component
