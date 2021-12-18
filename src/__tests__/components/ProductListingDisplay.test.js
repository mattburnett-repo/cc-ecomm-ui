// 20211217: Wireframe https://wireframe.cc/D5VIOi

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import ProductListingDisplay from '../../components/products/ProductListingDisplay';

const mockData = [
    {
        "id": 1,
        "category_id": 1,
        "name": "product_name_01",
        "description": "product_desc_01",
        "image_url": "http://www.image.com/item/1",
        "price": "1.00"
    },
    {
        "id": 2,
        "category_id": 2,
        "name": "product_name_02",
        "description": "product_desc_02",
        "image_url": "http://www.image.com/item/2",
        "price": "2.00"
    },
    {
        "id": 3,
        "category_id": 3,
        "name": "product_name_03",
        "description": "product_desc_03",
        "image_url": "http://www.image.com/item/3",
        "price": "3.00"
    },
    {
        "id": 4,
        "category_id": 4,
        "name": "product_name_04",
        "description": "product_desc_04",
        "image_url": "http://www.image.com/item/4",
        "price": "4.00"
    }
];

describe('<ProductListingDisplay data={mockData} /> component tests', () => {
    beforeEach(() => render(<ProductListingDisplay data={mockData} />));

    it('should display a nav bar', () => {
        screen.getByRole('presentation', {name: /nav-bar/i});
    });
    it('should show browse and search', () => {
        screen.getByRole('presentation', {name: /browse-search/i});
    });
    it('should show products', () => { // TODO: needs better coverage
        screen.getByRole('presentation', {name: /products/i});
    });
}); // end component
