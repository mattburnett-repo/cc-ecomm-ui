import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux'
import store from '../../store'

import Dashboard from '../../features/dashboard/Dashboard';

describe('<Dashboard /> feature tests', () => {
    test.todo('it should have functional / integration tests')
    // beforeEach(() => render(<Provider store={store}><Dashboard /></Provider>));

    // it('displays a nav bar', () => {
    //     const theVal = screen.getAllByRole('presentation', {name: /nav-bar/i});
    //     expect(theVal).toHaveLength(1)
    // })
    // it('displays orders info', () => {
    //     const theVal = screen.getAllByRole('presentation', {name: /^orders$/i});
    //     expect(theVal.length).toBe(1);
    // })
    // it('displays carts info', () => {
    //     const theVal = screen.getAllByRole('presentation', {name: /^carts$/i});
    //     expect(theVal.length).toBe(1);
    // })
    
    // it('creates a snapshot', () => {
    //     const tree = renderer.create(<Provider store={store}><Dashboard /></Provider>).toJSON();
    //     expect(tree).toMatchSnapshot();  
    // })
}) // end feature

