import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import ProductDetail from '../../features/product/productDetail';

describe('<ProductDetail /> feature tests', () => {
    beforeEach(() => render(<Provider store={store}><ProductDetail /></Provider>));

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
        const tree = renderer.create(<Provider store={store}><ProductDetail /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
}) // end mock data

describe('<ProductDetail /> unit tests', () => {
    beforeEach(() => render(<Provider store={store}><ProductDetail /></Provider>));

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