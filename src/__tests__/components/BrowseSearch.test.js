// browse and search functionality common to several other components

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import BrowseSearch from '../../components/nav/BrowseSearch';

const mockProductCategories = [
    {
        "category_id": 4,
        "description": "Auto"
    },
    {
        "category_id": 3,
        "description": "Health"
    },
    {
        "category_id": 1,
        "description": "Pets"
    },
    {
        "category_id": 2,
        "description": "Tech"
    }
];

describe('<BrowseSearch /> component tests', () => {
    beforeEach(() => render(<BrowseSearch />));

    it('should show product categories', () => {
        screen.getByRole('presentation', {name: /product-categories/i});
    });
    it('should show search term input', () => {
        screen.getByRole('textbox', {name: /search-terms/i});
    });
    it('should show search button', () => {
        screen.getByRole('button', {name: /search/i});
    });
}); // end component

describe('<BrowseSearch /> feature tests', () => {
    beforeEach(() => render(<BrowseSearch />));

    it('displays product categories', () => {
        expect(true).toBeFalsy();
    })

    it('creates a snapshot', () => {
        const tree = renderer.create(<BrowseSearch />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature

describe('<BrowseSearch /> unit / functional tests', () => {
    beforeEach(() => render(<BrowseSearch />));

    it('selects a product category', () => {
        expect(true).toBeFalsy();
    })

    it('accepts search text', () => {
        const theElement = screen.getByRole('textbox', {name: /search-terms/i});
        userEvent.type(theElement, 'here is some search text');
        
        expect(theElement).toHaveValue('here is some search text');
    });
    it('clicks the search button', () => {
        const theVal = screen.getByRole('button', {name: /search/i});
        fireEvent.click(theVal);
    });
}); // end feature