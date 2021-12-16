import { render, screen } from '@testing-library/react';
import ProductDetail from '../../components/product/Product';

describe('ProductDetail', () => {
    test('it has a product detail component', () => {

    })
    test('render', () => {
        render(<ProductDetail />);
        expect(screen.getByRole('title', {name: /details/i})).toHaveDescription(/details/i);
    })
})