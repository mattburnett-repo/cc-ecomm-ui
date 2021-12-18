// 20211217: Wireframe https://wireframe.cc/7nTPt0

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import ProductDetailDisplay from '../../components/product/ProductDetailDisplay';

const mockData = 
{
    "id": 2,
    "category_id": 2,
    "name": "product_name_02",
    "description": "product_desc_02",
    "image_url": "http://www.image.com/item/2",
    "price": "2.00"
};

describe('<ProductDetailDisplay /> component tests', () => {
    beforeEach(() => render(<ProductDetailDisplay data={mockData} />));

    it('should display a product image', () => {
        screen.getByRole('img', {name: /product-image/i});
    });
    it('should display a name', () => {
        screen.getByRole('presentation', {name: /name/i});
    });
    it('should display a description', () => {
        screen.getByRole('presentation', {name: /description/i});
    });
    it('should display a price', () => {
        screen.getByRole('presentation', {name: /price/i});
    });
    it('should display a quantity input', () => {
        screen.getByRole('textbox', {name: /quantity/i});
    });
    it('should display an add-to-cart button', () => {
        screen.getByRole('button', {name: /add-to-cart/i});
    });
}) // end component
