import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store.js'

import Login from '../../features/auth/login';

describe('<Login /> unit / functional tests', () => { 
    beforeEach(() => render(<Provider store={store}><Login /></Provider>)); // need to wrap in Provider because we're using redux in the feature

    it('clicks the Google auth link', () => {       // TODO: mock the actions calls for the login stuff
        const theVal = screen.getByRole('link', {name: /google-auth/i});
        fireEvent.click(theVal);
    });
    it('clicks the GitHub auth button', () => {
        const theVal = screen.getByRole('link', {name: /github-auth/i});
        fireEvent.click(theVal);
    });
    it('accept a value for username', ()=> {
        const theElement = screen.getByRole('textbox', {name: /username/i});
        userEvent.type(theElement, 'asdf');
        
        expect(theElement).toHaveValue('asdf');
    });
    it('accept a value for password', ()=> {
        const theElement = screen.getByLabelText('Password:');
        userEvent.type(theElement, 'asdf');
        
        expect(theElement).toHaveValue('asdf');
    });
    // FIXME: mock the onClick function. right now it triggers the function sends message to console
    it('clicks the Login button and triggers the onSubmit method', () => {
        const theVal = screen.getByRole('button', {name: /login/i});
        fireEvent.click(theVal);
    });
    it('clicks the Register link', () => {
        const theVal = screen.getByRole('link', {name: /register/i});
        fireEvent.click(theVal);
    });
}); // end unit

describe('<Login /> renders a snapshot', () => {
    it('renders a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><Login /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})