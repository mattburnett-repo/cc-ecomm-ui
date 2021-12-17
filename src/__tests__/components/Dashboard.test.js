// 20211217: Wireframe https://wireframe.cc/oEvbL9

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import Dashboard from '../../components/dashboard/Dashboard';

const mockUserData = {
    "id": 1,
    "user_name": "username_01",
    "password": "password_01",
    "email": "1@1.com",
    "google_id": null,
    "google_display_name": null,
    "google_first_name": null,
    "google_last_name": null,
    "google_image": null
};



describe('<Dashboard /> component tests', () => {
    beforeEach(() => render(<Dashboard />));

    // it('should greet user', () => {
    //     screen.getByRole('presentation', {name: /user-greeting/i});
    // });
    it('should render a NavBar', () => {
        screen.getByRole('presentation', {name: /nav-bar/i});
    });
    it('should show browse and search', () => {
        screen.getByRole('presentation', {name: /browse-search/i});
    });
    it('should show orders', () => {
        screen.getByRole('presentation', {name: /orders/i});
    });
    it('should show carts', () => {
        screen.getByRole('presentation', {name: /carts/i});
    });
}); // end component

describe('<Dashboard /> feature tests', () => {
    beforeEach(() => render(<Dashboard />));

    it('displays order info', () => {
        const theVal = screen.getAllByRole('presentation', {name: /^order$/i});
        expect(theVal.length).toBe(1);
    })
    it('displays cart info', () => {
        const theVal = screen.getAllByRole('presentation', {name: /^cart$/i});
        expect(theVal.length).toBe(4);
    })
    
    it('creates a snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}) // end feature

describe('<Dashboard /> unit / functional tests', () => {
    beforeEach(() => render(<Dashboard />));

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

