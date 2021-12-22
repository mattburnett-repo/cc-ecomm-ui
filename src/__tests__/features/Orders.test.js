
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store.js'

import Orders from '../../features/orders/orders';

describe('<Orders /> feature tests', () => {
    beforeEach(() => render(<Provider store={store}> <Orders/></Provider>));

    it('should render an OrdersDiplay component', () => {
        screen.getByRole('presentation', { name: /^orders$/i})
    })

    // it('should render order items from data', () => {
    //     const theVals = screen.getAllByRole('presentation', { name: /^order$/i})

    //     expect(theVals).toHaveLength(1)
    //     expect(theVals[0]).toHaveTextContent('order_id')
    //     expect(theVals[0]).toHaveTextContent('user_id')
    //     expect(theVals[0]).toHaveTextContent('order_date')
    //     expect(theVals[0]).toHaveTextContent('total_price')
    // })

    // it('creates a snapshot', () => {
    //     const tree = renderer.create(<Provider store={store}> <Orders/></Provider>).toJSON();
    //     expect(tree).toMatchSnapshot();  
    // });
})