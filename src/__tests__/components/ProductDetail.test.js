// 20211217: Wireframe https://wireframe.cc/7nTPt0

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import ProductDetail from '../../components/product/ProductDetail';

const mockData = 
{
    "id": 2,
    "category_id": 2,
    "name": "product_name_02",
    "description": "product_desc_02",
    "image_url": "http://www.image.com/item/2",
    "price": "2.00"
};

describe('<ProductDetail /> component tests', () => {
    beforeEach(() => render(<ProductDetail data={mockData} />));

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

describe('<ProductDetail /> feature tests', () => {
    beforeEach(() => render(<ProductDetail data={mockData} />));

    it('displays a value for a url to an image', () => {
        expect(screen.getByRole('img', {name: /product-image/i})).toHaveAttribute('src', 'http://www.image.com/item/2');
    });
    it('displays a value for a product name', () => {
        expect(screen.getByRole('presentation', {name: /name/i})).toHaveTextContent('product_name_02');
    });
    it('displays a value for a product description', () => {
        expect(screen.getByRole('presentation', {name: /description/i})).toHaveTextContent('product_desc_02');
    });
    it('displays a value for a product price', () => {
        expect(screen.getByRole('presentation', {name: /price/i})).toHaveTextContent('2.00');
    });
    it('displays an empty quantity', () => {
        expect(screen.getByRole('textbox', {name: /quantity/i})).toHaveTextContent('');
    });

    it('renders a snapshot', () => {
        const tree = renderer.create(<ProductDetail data={mockData} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
}) // end mock data

describe('<ProductDetail /> unit tests', () => {
    beforeEach(() => render(<ProductDetail data={mockData} />));

    it('changes the value of the product quantity', () => {
        const theElement = screen.getByRole('textbox', {name: /quantity/i});
        userEvent.type(theElement, '10');
        
        expect(theElement).toHaveValue('10');
    });
    it('clicks the add-to-cart button', () => {
        const theVal = screen.getByRole('button', {name: /add-to-cart/i});
        fireEvent.click(theVal);

        // TODO: mock an onSubmit function and test that also
    });
})