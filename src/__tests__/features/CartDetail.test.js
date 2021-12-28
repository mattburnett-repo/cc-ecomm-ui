
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import CartDetail from '../../features/cart/cartDetail';

describe('<CartDetail /> feature tests', () => {
    // beforeEach(() => render(<Provider store={store}><CartDetail  /></Provider>));

    test.todo('should be a feature test');

    test.todo('should show cart and user info from data');
    test.todo('should show cart items from data');
    test.todo('show cart item quantity');
    test.todo('show cart total from data');
    test.todo('create a snapshot');
}); // end feature

describe('<Cart /> unit / functional tests', () => {
    // beforeEach(() => render(<Provider store={store}><Cart /></Provider>));

    test.todo('should be a feature test');
    
    test.todo('change a product quantity value');
    test.todo('clicks the checkout button');
}); // end unit / functional