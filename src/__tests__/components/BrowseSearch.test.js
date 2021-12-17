// browse and search functionality common to several other components

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import BrowseSearch from '../../components/nav/BrowseSearch';

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
        const theVal = screen.getByRole('presentation', {name: /product-categories/i});
        expect(theVal.length).toBe(4);
    })

    it('creates a snapshot', () => {
        const tree = renderer.create(<BrowseSearch />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature

describe('<BrowseSearch /> unit / functional tests', () => {
    beforeEach(() => render(<BrowseSearch />));

    it('selects a product category', () => {
        fireEvent.change(screen.getByRole('presentation', {name: /product-categories/i}), { target: { value: 2 } })
        let options = screen.getByRole('presentation', {name: /product-categories/i});
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeTruthy();
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