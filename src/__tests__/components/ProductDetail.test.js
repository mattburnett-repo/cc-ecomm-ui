import { render, screen } from '@testing-library/react';
import ProductDetail from '../../components/product/ProductDetail';
import fs from 'fs'

const mockData = 
{
    "id": 2,
    "category_id": 2,
    "name": "product_name_02",
    "description": "product_desc_02",
    "image_url": "http://www.image.com/item/2",
    "price": "2.00"
};

describe('<ProductDetail /> basic render', () => {
    // FIXME: this should be beforeAll, but beforeAll blows out the tests after the first one runs...
    beforeEach(() => {
        render(<ProductDetail data={mockData} />);
    });

    it('should have a product image', () => {
        screen.getByRole('img', {name: /product-image/i});
    });
    it('should have a description', () => {
        screen.getByRole('presentation', {name: /description/i});
    });
    it('should show a price', () => {
        screen.getByRole('presentation', {name: /price/i});
    });
    it('should have a quantity selector', () => {
        screen.getByRole('textbox', {name: /quantity/i});
    });
    it('should have an add-to-cart button', () => {
        screen.getByRole('button', {name: /add-to-cart/i});
    });
}) // end basic render

describe('<ProductDetail /> correctly shows mock data', () => {
    beforeEach(() => {
        render(<ProductDetail data={mockData} />);
    });

    it('displays a product name', () => {
            
    });
    it('displays a product description', () => {
        
    });
    it('displays a product price', () => {
        
    });
}) // end mock data