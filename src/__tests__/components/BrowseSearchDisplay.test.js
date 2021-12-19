// browse and search functionality common to several other components

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { mockProductCategories } from '../../utils/mockData'; 

import BrowseSearchDisplay from '../../components/nav/BrowseSearchDisplay';

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
