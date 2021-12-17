// browse and search functionality common to several other components

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

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

describe('<BrowseSearchDisplay /> component tests', () => {
    beforeEach(() => render(<BrowseSearchDisplay data={ mockProductCategories }/>));

    it('should show product categories', () => {
        screen.getByRole('presentation', {name: /product-categories/i});
    });
    it('should show search term input', () => {
        screen.getByRole('textbox', {name: /search-terms/i});
    });
    it('should show search button', () => {
        screen.getByRole('button', {name: /search/i});
    });

    it('creates a snapshot', () => {
        const tree = renderer.create(<BrowseSearchDisplay  data={ mockProductCategories }/>).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); // end component
