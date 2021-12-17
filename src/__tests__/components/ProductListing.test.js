// 20211217: Wireframe https://wireframe.cc/D5VIOi

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import ProductListing from '../../components/products/ProductListing';

describe('<ProductListing /> component tests', () => {
    beforeEach(() => render(<ProductListing />));

    it('should display the selected product category', () => {
        screen.getByRole('presentation', {name: /product-category/i});
    });
    it('should show browse and search', () => {
        screen.getByRole('presentation', {name: /browse-search/i});
    });
    it('should show individual product listings', () => {
        screen.getByRole('presentation', {name: /product-listing/i});
    });
}); // end component

describe('<ProductListing /> feature tests', () => {
    beforeEach(() => render(<ProductListing />));

    it('displays individual product listing', () => {
        expect(true).toBeFalsy();
    })

    it('creates a snapshot', () => {
        const tree = renderer.create(<ProductListing />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature

describe('<ProductListing /> unit / functional tests', () => {
    beforeEach(() => render(<ProductListing />));

    it('selects a product category', () => {
        expect(true).toBeFalsy();
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