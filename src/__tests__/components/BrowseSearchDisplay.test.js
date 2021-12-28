// browse and search functionality common to several other components

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { mockProductCategories } from '../../utils/mockData'; 

import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

const mockHandleChange = jest.fn()
const mockHandleSearch = jest.fn()

function mockHandlers() {
    return {
        handleChange: mockHandleChange,
        handleSearch: mockHandleSearch,
    }
}

describe('<BrowseSearchDisplay /> component tests', () => {
    beforeEach(() => render(<BrowseSearchDisplay data={ mockProductCategories } handlers={mockHandlers()} />));

    it('should render a browse element', () => {
        screen.getByRole('presentation', {name: /^browse$/i});
    })
    it('should render product categories', () => {
        screen.getByRole('presentation', {name: /product-categories/i});
    });
    it('should select a product category', () => {
        // FIXME: use mockHandleChange here, somehow
        fireEvent.change(screen.getByRole('presentation', {name: /product-categories/i}), { target: { value: 2 } })
        let options = screen.getByRole('presentation', {name: /product-categories/i});
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeFalsy();
        expect(options[4].selected).toBeTruthy();
    });

    it('should render a search element', () => {
        screen.getByRole('presentation', {name: /^search$/i});
    })
    it('should render search term input', () => {
        screen.getByRole('textbox', {name: /search-terms/i});
    });
    it('should render search button', () => {
        screen.getByRole('button', {name: /search/i});
    });
    it('accepts search text', () => {
        const theElement = screen.getByRole('textbox', {name: /search-terms/i});
        userEvent.type(theElement, 'here is some search text');
        
        expect(theElement).toHaveValue('here is some search text');
    });
    it('clicks the search button', () => {
        mockHandleSearch.mockImplementation((e) => {e.preventDefault()});
        const theVal = screen.getByRole('button', {name: /search/i});
        fireEvent.click(theVal);

        expect(mockHandleSearch.mock.calls.length).toBe(1);
        // expect(mockHandleClick()).toBe('Search'); 
    });

    it('creates a snapshot', () => {
        const tree = renderer.create(<BrowseSearchDisplay  data={ mockProductCategories } handlers={mockHandlers()}/>).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end component
