// browse and search functionality common to several other components

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { mockProductCategories } from '../../utils/mockData'; 

import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

const mockHandleChange = jest.fn()
const mockHandleSearch = jest.fn()

describe('<BrowseSearchDisplay /> component tests', () => {
    beforeEach(() => render(<BrowseSearchDisplay data={ mockProductCategories } handleChange={mockHandleChange} handleSearch={mockHandleSearch} />));

    it('should show product categories', () => {
        screen.getByRole('presentation', {name: /product-categories/i});
    });
    it('should select a product category', () => {
        fireEvent.change(screen.getByRole('presentation', {name: /product-categories/i}), { target: { value: 2 } })
        let options = screen.getByRole('presentation', {name: /product-categories/i});
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeFalsy();
        expect(options[4].selected).toBeTruthy();
    });

    it('should show search term input', () => {
        screen.getByRole('textbox', {name: /search-terms/i});
    });
    it('should show search button', () => {
        screen.getByRole('button', {name: /search/i});
    });
    it('accepts search text', () => {
        const theElement = screen.getByRole('textbox', {name: /search-terms/i});
        userEvent.type(theElement, 'here is some search text');
        
        expect(theElement).toHaveValue('here is some search text');
    });
    it('clicks the search button', () => {
        const theVal = screen.getByRole('button', {name: /search/i});
        fireEvent.click(theVal);
    });

    it('creates a snapshot', () => {
        const tree = renderer.create(<BrowseSearchDisplay  data={ mockProductCategories }/>).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end component
