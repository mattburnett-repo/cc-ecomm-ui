import { render, screen } from '@testing-library/react';
import ProductDetail from '../../components/product/Product';

describe('<ProductDetail /> basic render', () => {
    // FIXME: this should be beforeAll, but beforeAll blows out the tests after first test is run...
    beforeEach(() => {
        render(<ProductDetail />);
    });

    it('should have an image to display', () => {
        screen.getByRole('img', {name: /product-image/i});
    });
    it('should have a description', () => {
        // screen.getByRole('presentation', {name: /description/i});
        expect(screen.getByText(/description/i)).toBeInTheDocument();
    });
    it('should show a price', () => {
        // screen.getByRole('presentation', {name: /price/i});
        expect(screen.getByText(/price/i)).toBeInTheDocument();
    });
    it('should have a quantity selector', () => {
        // screen.getByRole('select', {name: /quantity-selector/i});
        expect(screen.getByText(/qty/i)).toBeInTheDocument();
    });
    it('should have an add-to-cart button', function () {
        screen.getByRole('button', {name: /add-to-cart/i});
    });
})