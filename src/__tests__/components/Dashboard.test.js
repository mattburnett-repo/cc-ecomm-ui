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

const mockOrderData = {
    "order": {
        "cart": {
            "cart_id": 1,
            "cart_items": [
                {
                    "product_id": 1,
                    "product_name": "product_name_01",
                    "product_price": 1,
                    "product_quantity": 1,
                    "product_total_price": 1
                },
                {
                    "product_id": 2,
                    "product_name": "product_name_02",
                    "product_price": 2,
                    "product_quantity": 2,
                    "product_total_price": 4
                },
                {
                    "product_id": 3,
                    "product_name": "product_name_03",
                    "product_price": 3,
                    "product_quantity": 3,
                    "product_total_price": 9
                },
                {
                    "product_id": 4,
                    "product_name": "product_name_04",
                    "product_price": 4,
                    "product_quantity": 4,
                    "product_total_price": 16
                }
            ]
        },
        "user_id": 1,
        "order_id": 1,
        "order_date": null,
        "total_price": {
            "sum": 30,
            "cart_id": 1
        }
    }
};

const mockCartData = [
    {
        "id": 1,
        "product_id": 1,
        "name": "product_name_01",
        "product_quantity": 1,
        "product_price": "1.00",
        "line_item_total_price": "1.00"
    },
    {
        "id": 1,
        "product_id": 2,
        "name": "product_name_02",
        "product_quantity": 2,
        "product_price": "2.00",
        "line_item_total_price": "4.00"
    },
    {
        "id": 1,
        "product_id": 3,
        "name": "product_name_03",
        "product_quantity": 3,
        "product_price": "3.00",
        "line_item_total_price": "9.00"
    },
    {
        "id": 1,
        "product_id": 4,
        "name": "product_name_04",
        "product_quantity": 4,
        "product_price": "4.00",
        "line_item_total_price": "16.00"
    }
];

describe('<Dashboard /> component tests', () => {
    beforeEach(() => render(<Dashboard />));

    it('should greet user', () => {
        screen.getByRole('presentation', {name: /user-greeting/i});
    });
    it('should show product categories', () => {
        screen.getByRole('presentation', {name: /product-categories/i});
    });
    it('should show search term input', () => {
        screen.getByRole('textbox', {name: /search-terms/i});
    });
    it('should show search button', () => {
        screen.getByRole('button', {name: /search/i});
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

    it('displays product categories', () => {
        expect(true).toBeFalsy();
    })
    it('displays order info', () => {
        expect(true).toBeFalsy();
    })
    it('displays cart info', () => {
        expect(true).toBeFalsy();
    })
    
    it('creates a snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}) // end feature

describe('<Dashboard /> unit / functional tests', () => {
    beforeEach(() => render(<Dashboard />));

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

