// 20211217: Wireframe https://wireframe.cc/D5VIOi

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import ProductsListingDisplay from '../../components/products/ProductsListingDisplay';

import { mockProducts } from '../../utils/mockData'

describe('<ProductsListingDisplay data={mockData} /> component tests', () => {
    beforeEach(() => render(<Provider store={store}><ProductsListingDisplay data={mockProducts} /></ Provider>));

    it('should display products', () => { 
        screen.getByRole('presentation', {name: /products/i});
        
        let theVals = screen.getAllByRole('presentation', {name: /^product$/i});
        expect(theVals).toHaveLength(4);

        expect(theVals[0]).toHaveTextContent('product_name_01');
        expect(theVals[1]).toHaveTextContent('product_name_02');
        expect(theVals[2]).toHaveTextContent('product_name_03');
        expect(theVals[3]).toHaveTextContent('product_name_04');
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

    it('creates a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><ProductsListingDisplay data={mockProducts} /></ Provider>).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end component
