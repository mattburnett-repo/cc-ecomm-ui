import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import ProductListing from '../../features/products/productListing';

describe('<ProductListing /> feature tests', () => {
    test.todo('there should be integration tests')
}); // end unit / functional