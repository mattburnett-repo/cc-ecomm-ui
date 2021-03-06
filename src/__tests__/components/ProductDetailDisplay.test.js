// 20211217: Wireframe https://wireframe.cc/7nTPt0

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import store from '../../store'
import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import ProductDetailDisplay from '../../components/product/ProductDetailDisplay';

import { mockProduct } from '../../utils/mockData'

describe('<ProductDetailDisplay /> component tests', () => {
    beforeEach(() => render(<ThemeProvider theme= { theme }><Provider store={store}><ProductDetailDisplay item={mockProduct} /></Provider></ThemeProvider>));

    it('should display a product image', () => {
        // screen.getByRole('img', {name: /product-image/i});
        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010__340.jpg');
    });
    it('should display a description', () => {
        screen.getByRole('presentation', {name: /description/i});
        expect(screen.getByRole('presentation', {name: /description/i})).toHaveTextContent('prod desc 02');
    });
    it('should display a price', () => {
        screen.getByRole('presentation', {name: /price/i});
        expect(screen.getByRole('presentation', {name: /price/i})).toHaveTextContent('1.00');
    });

    // // TODO: add mockHandleAddToCart test/s
    it('should display an add-to-cart button', () => {
        let theVal = screen.getByRole('button', {name: /add-to-cart/i});
        fireEvent.click(theVal)

        expect(theVal).toHaveTextContent('Add To Cart')
    });

    it('renders a snapshot', () => {
        const tree = renderer.create(<ThemeProvider theme= { theme }><Provider store={store}><ProductDetailDisplay item={mockProduct} /></Provider></ThemeProvider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
}) // end component
