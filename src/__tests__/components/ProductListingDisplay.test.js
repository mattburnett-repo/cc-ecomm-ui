// 20211217: Wireframe https://wireframe.cc/D5VIOi

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import ProductListingDisplay from '../../components/products/ProductListingDisplay';

import { mockProducts } from '../../utils/mockData'

describe('<ProductListingDisplay data={mockData} /> component tests', () => {
    beforeEach(() => render(<ProductListingDisplay data={mockProducts} />));

    it('should render a nav bar', () => {
        screen.getByRole('presentation', {name: /nav-bar/i});
    });
    it('should render browse and search', () => {
        screen.getByRole('presentation', {name: /browse-search/i});
    });
    it('should render products', () => { 
        screen.getByRole('presentation', {name: /products/i});
        
        let theVal = screen.getAllByRole('presentation', {name: /^product$/i});
        expect(theVal).toHaveLength(4);
    });
    it('should render product names', () => { 
        let theVal = screen.getAllByRole('presentation', {name: /product-name/i});
        expect(theVal).toHaveLength(4);
    });
    it('should render product descriptions', () => {
        let theVal = screen.getAllByRole('presentation', {name: /product-description/i});
        expect(theVal).toHaveLength(4);
    });
    it('should render product image_urls', () => { 
        let theVal = screen.getAllByRole('img', {name: /image-url/i});
        expect(theVal).toHaveLength(4);
    });
    it('should render product prices', () => { 
        let theVal = screen.getAllByRole('presentation', {name: /product-price/i});
        expect(theVal).toHaveLength(4);
    });
}); // end component
