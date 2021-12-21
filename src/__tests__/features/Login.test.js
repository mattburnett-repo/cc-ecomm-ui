import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store.js'

import Login from '../../features/auth/login';

describe('<Login /> unit / functional tests', () => { 
    beforeEach(() => render(<Provider store={store}><Login /></Provider>)); // need to wrap in Provider because we're using redux in the feature

    it('accept a value for username', ()=> {
        const theElement = screen.getByRole('textbox', {name: /username/i});
        userEvent.type(theElement, 'asdf');
        
        expect(theElement).toHaveValue('asdf');
    });
    it('accepts a value for password', ()=> {
        const theElement = screen.getByLabelText('Password:');
        userEvent.type(theElement, 'asdf');
        
        expect(theElement).toHaveValue('asdf');
    });

    it('submits the form', () => {
        // not sure how to mock this
        expect(true).toBeFalsy();
    })

}); // end unit

describe('<Login /> renders a snapshot', () => {
    it('renders a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><Login /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})