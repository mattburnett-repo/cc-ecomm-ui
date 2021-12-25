// 20211217: Wireframe https://wireframe.cc/kXiUKu

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import CartsDisplay from '../../components/carts/CartsDisplay';

import { mockCartData } from '../../utils/mockData'

describe('<CartsDisplay cartsData={mockCartData} /> component tests', () => {
    beforeEach(() => render(<Provider store={store}><CartsDisplay cartsData={mockCartData} /></Provider>));

    it('should render carts', () => {
        screen.getAllByRole('presentation', {name: /^carts$/i});
    });
    it('should render a cart record', () => {
        const theVals = screen.getAllByRole('presentation', {name: /^cart$/i});

        expect(theVals).toHaveLength(1)
    });
    it('creates a snapshot', () => {
      const tree = renderer.create(<Provider store={store}><CartsDisplay cartsData={mockCartData} /></Provider>).toJSON();
      expect(tree).toMatchSnapshot();  
    });
}); // end component
