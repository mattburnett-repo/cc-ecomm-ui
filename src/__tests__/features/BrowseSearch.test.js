import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import BrowseSearch from '../../features/nav/BrowseSearch';

describe('<BrowseSearch /> feature tests', () => {
    beforeEach(() => render(<Provider store={store}><BrowseSearch /></Provider>));

    it('displays product categories', () => {
        const theVal = screen.getByRole('presentation', {name: /product-categories/i});
        expect(theVal.length).toBe(4);
    })
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
    it('creates a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><BrowseSearch /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature
