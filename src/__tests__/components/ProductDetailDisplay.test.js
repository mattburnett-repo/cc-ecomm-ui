// 20211217: Wireframe https://wireframe.cc/7nTPt0

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import store from '../../store'

import ProductDetailDisplay from '../../components/product/ProductDetailDisplay';

import { mockProduct } from '../../utils/mockData'

const mockHandleAddToCart = jest.fn()

describe('<ProductDetailDisplay /> component tests', () => {
    beforeEach(() => render(<ProductDetailDisplay data={mockProduct} handleAddToCart={ mockHandleAddToCart }/>));

    it('should display a product image', () => {
        screen.getByRole('img', {name: /product-image/i});
        expect(screen.getByRole('img', {name: /product-image/i})).toHaveAttribute('src', 'https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_1280.jpg');
    });
    it('should display a name', () => {
        screen.getByRole('presentation', {name: /name/i});
        expect(screen.getByRole('presentation', {name: /name/i})).toHaveTextContent('product_name_02');
    });
    it('should display a description', () => {
        screen.getByRole('presentation', {name: /description/i});
        expect(screen.getByRole('presentation', {name: /description/i})).toHaveTextContent('product_desc_02');
    });
    it('should display a price', () => {
        screen.getByRole('presentation', {name: /price/i});
        expect(screen.getByRole('presentation', {name: /price/i})).toHaveTextContent('2.00');
    });
    it('should display a quantity input', () => {
        screen.getByRole('textbox', {name: /quantity/i});
        expect(screen.getByRole('textbox', {name: /quantity/i})).toHaveTextContent('');
    });
    // TODO: add mockHandleAddToCart test/s
    it('should display an add-to-cart button', () => {
        screen.getByRole('button', {name: /add-to-cart/i});
    });

    it('renders a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><ProductDetailDisplay data={mockProduct} /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
}) // end component
