// 20211217: Wireframe https://wireframe.cc/D5VIOi

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'
import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import ProductsListingDisplay from '../../components/products/ProductsListingDisplay';

import { mockProducts } from '../../utils/mockData'

const mockHandleImageClick = jest.fn()
const mockHandleAddToCart = jest.fn()

function handlers() {
    return {
        handleImageClick: mockHandleImageClick,
        handleAddToCart: mockHandleAddToCart
    }
}

describe('<ProductsListingDisplay data={mockData} /> component tests', () => {
    test.todo('fix unexplainable problems')
    // beforeEach(() => render(<ThemeProvider theme= { theme }><Provider store={store}><ProductsListingDisplay data={mockProducts} handlers={handlers()}/></ Provider></ThemeProvider>));

    // it('should render', () => { 
    //     screen.getByRole('presentation', {name: /products/i});
        
    //     let theVals = screen.getAllByRole('presentation', {name: /^product$/i});
    //     expect(theVals).toHaveLength(4);

    //     expect(theVals[0]).toHaveTextContent('product_name_01');
    //     expect(theVals[1]).toHaveTextContent('product_name_02');
    //     expect(theVals[2]).toHaveTextContent('product_name_03');
    //     expect(theVals[3]).toHaveTextContent('product_name_04');
    // });
    // it('should render product names', () => { 
    //     let theVal = screen.getAllByRole('presentation', {name: /product-name/i});
    //     expect(theVal).toHaveLength(4);
    // });
    // it('should render product descriptions', () => {
    //     let theVal = screen.getAllByRole('presentation', {name: /product-description/i});
    //     expect(theVal).toHaveLength(4);
    // });
    // it('should render product image_urls', () => { 
    //     let theVal = screen.getAllByRole('img', {name: /image-url/i});
    //     expect(theVal).toHaveLength(4);
    // });
    // it('should click the image as a link', () => {
    //     let theVals = screen.getAllByRole('img', /product-image-url/i)
    //     fireEvent.click(theVals[0])
    // })

    // it('should render product price', () => { 
    //     let theVal = screen.getAllByRole('presentation', {name: /product-price/i});
    //     expect(theVal).toHaveLength(4);
    // });

    // it('should select a value from an item-quantity-selector element', () => {
    //     window.alert = () => {}; // https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
        
    //     let theVals = screen.getAllByRole('presentation', {name: /item-quantity-selector/i});
    //     expect(theVals).toHaveLength(4)

    //     fireEvent.change(theVals[0], { target: { value: 7 } })
    //     let options = theVals[0];
    //     expect(options[0].selected).toBeFalsy();
    //     expect(options[1].selected).toBeFalsy();
    //     expect(options[2].selected).toBeFalsy();
    //     expect(options[3].selected).toBeFalsy();
    //     expect(options[4].selected).toBeFalsy();
    //     expect(options[5].selected).toBeFalsy();
    //     expect(options[6].selected).toBeTruthy();
    //     expect(options[7].selected).toBeFalsy();
    //     expect(options[8].selected).toBeFalsy();
    //     expect(options[9].selected).toBeFalsy();
    // });

    // // TODO: add mockHandleAddToCart test/s
    // it('should display an add-to-cart button', () => {
    //     let theVals = screen.getAllByRole('button', {name: /add-to-cart/i});

    //     expect(theVals).toHaveLength(4)
    // });
    // it('should click an add-to-cart button', () => {
    //     let theVals = screen.getAllByRole('button', {name: /add-to-cart/i});
    //     fireEvent.click(theVals[0])
    // })

    // it('creates a snapshot', () => {
    //     const tree = renderer.create(<ThemeProvider theme= { theme }><Provider store={store}><ProductsListingDisplay data={mockProducts}  handlers={handlers()} /></ Provider></ThemeProvider>).toJSON();
    //     expect(tree).toMatchSnapshot();  
    // });
}); // end component
