import { render, screen } from '@testing-library/react';
import Product from '../../components/product/Product';

describe('<Product /> basic render', () => {
    // FIXME: this should be beforeAll, but beforeAll blows out the tests after the first one runs...
    beforeEach(() => {
        render(<Product />);
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
})