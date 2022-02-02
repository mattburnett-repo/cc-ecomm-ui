// 20211217: Wireframe https://wireframe.cc/D5VIOi

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom';

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
    //      https://testing-library.com/docs/example-react-router/
    const mockHistory = createMemoryHistory()
    mockHistory.push('/')

    test.todo('Generates \'Cannot update during an existing state...\' message in BrowseSearch. ???')
    beforeEach(() => render(<ThemeProvider theme= { theme }><Provider store={store}><Router history={mockHistory}><ProductsListingDisplay data={mockProducts} handlers={handlers()}/></Router></ Provider></ThemeProvider>));

    it('should have an initial render with no products displayed, and a link/button to expand product display', () => {
        let theVal = screen.getByRole('button', {name: /toggle-product-display/i})
        expect(theVal).toHaveTextContent('Click to Show Products')
    })
    it('should click the Show Products button, and render products displays', () => {
        let theVal = screen.getByRole('button', {name: /toggle-product-display/i})
        fireEvent.click(theVal)

        theVal = screen.getByRole('button', {name: /toggle-product-display/i})
        expect(theVal).toHaveTextContent('Click to Hide Products')
    })
}); // end component
