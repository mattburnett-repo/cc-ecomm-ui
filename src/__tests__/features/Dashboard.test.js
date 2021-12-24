import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux'
import store from '../../store'

import Dashboard from '../../features/dashboard/Dashboard';

describe('<Dashboard /> feature tests', () => {
    beforeEach(() => render(<Provider store={store}><Dashboard /></Provider>));

    it('displays a nav bar', () => {
        const theVal = screen.getAllByRole('presentation', {name: /nav-bar/i});
        expect(theVal).toHaveLength(1)
    })
    it('displays orders info', () => {
        const theVal = screen.getAllByRole('presentation', {name: /^orders$/i});
        expect(theVal.length).toBe(1);
    })
    it('displays cart info', () => {
        const theVal = screen.getAllByRole('presentation', {name: /^cart$/i});
        expect(theVal.length).toBe(1);
    })
    
    it('creates a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><Dashboard /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}) // end feature

describe('<Dashboard /> unit / functional tests', () => {
    beforeEach(() => render(<Provider store={store}><Dashboard /></Provider>));

    it('selects a product category', () => {
        fireEvent.change(screen.getByRole('presentation', {name: /product-categories/i}), { target: { value: 2 } })
        let options = screen.getByRole('presentation', {name: /product-categories/i});
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();
        expect(options[3].selected).toBeTruthy();
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
})