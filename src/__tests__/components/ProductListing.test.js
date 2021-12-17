// 20211217: Wireframe https://wireframe.cc/D5VIOi

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import ProductListing from '../../components/products/ProductListing';

describe('<ProductListing /> component tests', () => {
    beforeEach(() => render(<ProductListing />));

    it('should display a nav bar', () => {
        screen.getByRole('presentation', {name: /nav-bar/i});
    });
    it('should show browse and search', () => {
        screen.getByRole('presentation', {name: /browse-search/i});
    });
    it('should show products', () => {
        screen.getByRole('presentation', {name: /products/i});
    });
}); // end component

describe('<ProductListing /> feature tests', () => {
    beforeEach(() => render(<ProductListing />));

    // FIXME: this test doesn't look right. only 4 items in mock array, but receives 6
    it('displays products', () => {
        const theVal = screen.getAllByRole('presentation', {name: /product/i});
        expect(theVal.length).toBe(6);
    })

    it('creates a snapshot', () => {
        const tree = renderer.create(<ProductListing />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature

describe('<ProductListing /> unit / functional tests', () => {
    beforeEach(() => render(<ProductListing />));

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