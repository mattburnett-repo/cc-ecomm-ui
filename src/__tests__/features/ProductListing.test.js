import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import ProductListing from '../../features/products/productListing';

describe('<ProductListing /> feature tests', () => {
    // beforeEach(() => render(<Provider store={store}><ProductListing /></ Provider>));
    beforeEach(() => render(<Provider store={store}><ProductListing /></ Provider>));

    it('displays correct nav bar elements', () => {
        screen.getByRole('button', { name: /home/i});
        screen.getByRole('button', { name: /show-cart/i});
        screen.getByRole('button', { name: /logout/i});
    })
    it('displays products', () => {
        let theVals = screen.getAllByRole('presentation', {name: /^product$/i});
        expect(theVals.length).toBe(4);

        expect(theVals[0]).toHaveTextContent('product_name_01');
        expect(theVals[1]).toHaveTextContent('product_name_02');
        expect(theVals[2]).toHaveTextContent('product_name_03');
        expect(theVals[3]).toHaveTextContent('product_name_04');
    })

    it('creates a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><ProductListing /></ Provider>).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature

describe('<ProductListing /> unit / functional tests', () => {
    beforeEach(() => render(<Provider store={store}><ProductListing /></ Provider>));

    it('selects a product category', () => {
        fireEvent.change(screen.getByRole('presentation', {name: /product-categories/i}), { target: { value: 2 } })
        let options = screen.getByRole('presentation', {name: /product-categories/i});
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeTruthy();
    });
    it('accepts search text', () => {
        const theElement = screen.getByRole('textbox', {name: /search-terms/i});
        userEvent.type(theElement, 'here is some search text');
        
        expect(theElement).toHaveValue('here is some search text');
    });
    it('clicks the search button', () => {
        const theVal = screen.getByRole('button', {name: /search/i});
        fireEvent.click(theVal);
    });
}); // end unit / functional