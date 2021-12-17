// 20211217: Wireframe https://wireframe.cc/6MXHyR

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import Register from '../../components/auth/Register';

describe('<Register /> component tests', () => {
    beforeEach(() => render(<Register />));

    it('should display a google oauth button', () => {
        screen.getByRole('button', { name: /google-auth/i});
    });
    
    it('should display a github oauth button', () => {
        screen.getByRole('button', { name: /github-auth/i});
    });
    it('should display a username input', () => {
        screen.getByRole('textbox', { name: /username/i});
    });
    it('should display an email input', () => {
        screen.getByRole('textbox', { name: /email/i});
    });
    it('should display a password input', () => {
        screen.getByLabelText('Password:');
    });
    it('should display a Register button', () => {
        screen.getByRole('button', { name: /Register/i});
    });
    it('should have a Log in link', () => {
        screen.getByRole('link', { name: /login/i});
    })
}); // end component

// features?

describe('<Register /> renders a snapshot', () => {
    it('renders a snapshot', () => {
        const tree = renderer.create(<Register />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})

describe('<Register /> unit tests', () => {
    beforeEach(() => render(<Register />));

    it('clicks the Google auth button', () => {
        const theVal = screen.getByRole('button', {name: /google-auth/i});
        fireEvent.click(theVal);

        // TODO: mock an onSubmit function and test that also
    });
    it('clicks the GitHub auth button', () => {
        const theVal = screen.getByRole('button', {name: /github-auth/i});
        fireEvent.click(theVal);

        // TODO: mock an onSubmit function and test that also
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
    it('clicks the Register button', () => {
        const theVal = screen.getByRole('button', {name: /Register/i});
        fireEvent.click(theVal);

        // TODO: mock an onSubmit function and test that also
    });
    it('clicks the Login link', () => {
        const theVal = screen.getByRole('link', {name: /login/i});
        fireEvent.click(theVal);
    });
}); // end unit
