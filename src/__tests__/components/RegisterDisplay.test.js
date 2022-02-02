// 20211217: Wireframe https://wireframe.cc/6MXHyR

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import RegisterDisplay from '../../components/auth/RegisterDisplay';

const mockHandleClick = jest.fn();
const mockHandleRegister = jest.fn()
const mockHandleLogin = jest.fn()

function mockHandlers() {
    return {
        handleClick: mockHandleClick,
        handleRegister: mockHandleRegister,
        handleLogin: mockHandleLogin,
    }
}

describe('<RegisterDisplay /> component tests', () => {
    beforeEach(() => render(<ThemeProvider theme= { theme }><RegisterDisplay handlers={mockHandlers()}/></ThemeProvider>));

    it('renders the display component', () => {
        screen.getByRole('presentation', { name: /^register-display$/i })
    })

    // it('renders an oauth section', () => {
    //     screen.getByRole('presentation', { name: /^oauth$/i })
    // })
    // it('renders a google oauth link', () => {
    //     let theVal = screen.getByRole('link', { name: /google-auth/i});
    //     expect(theVal).toHaveTextContent('Log in with Google');
    // });
    // it('clicks the Google auth link', () => {       
    //     // mockHandleClick.mockImplementation((e) => {console.log(e.target.text)});
    //     mockHandleClick.mockReturnValue('Log in with Google'); // FIXME: evaluate e.target.name / value instead of hard-coding test val here
    //     const theVal = screen.getByRole('link', {name: /google-auth/i});
    //     fireEvent.click(theVal);

    //     expect(mockHandleClick.mock.calls.length).toBe(1);
    //     expect(mockHandleClick()).toBe('Log in with Google');
    // });
    // it('renders a github oauth link', () => {
    //     let theVal = screen.getByRole('link', { name: /github-auth/i});
    //     expect(theVal).toHaveTextContent('Log in with GitHub');
    // });
    // it('clicks the GitHub auth link', () => {
    //     // mockHandleClick.mockImplementation((e) => {console.log(e.target.text)});
    //     mockHandleClick.mockReturnValue('Log in with GitHub'); // FIXME: evaluate e.target.name / value instead of hard-coding test val here
    //     const theVal = screen.getByRole('link', {name: /github-auth/i});
    //     fireEvent.click(theVal);

    //     expect(mockHandleClick.mock.calls.length).toBe(1);
    //     expect(mockHandleClick()).toBe('Log in with GitHub');               // FIXME
    // });

    it('renders a registration form', () => {
        screen.getByRole('presentation', { name: /register-display-form/i})
    })
    it('renders a username input', () => {
        screen.getByRole('textbox', { name: /username/i});
    });
    it('accept a value for username', ()=> {
        const theElement = screen.getByRole('textbox', {name: /username/i});
        userEvent.type(theElement, 'asdf');
        
        expect(theElement).toHaveValue('asdf');
    });
    it('renders an email input and accepts input', () => {
        const theElement = screen.getByRole('textbox', { name: /email/i});
        userEvent.type(theElement, 'asdf@asdf.com');
        
        expect(theElement).toHaveValue('asdf@asdf.com');
    });

    // I don't like using test ids, but can't find a simple / clean solution to test passwords,
    //      so here we are...
    it('renders a password input', () => {
        screen.getByTestId('password')
        // screen.getByLabelText('Password:');
    });
    it('accepts a value for password', ()=> {
        const theElement = screen.getByTestId('password')
        userEvent.type(theElement, 'asdf');
        
        expect(theElement).toHaveValue('asdf');
    });
    it('renders a password verify input', () => {
        screen.getByTestId('password-verify')
        // screen.getByLabelText('Password:');
    });
    it('accepts a value for password verify', ()=> {
        const theElement = screen.getByTestId('password-verify')
        userEvent.type(theElement, 'asdf');
        
        expect(theElement).toHaveValue('asdf');
    });

    it('renders a Register button', () => {
        screen.getByRole('button', { name: /register/i});
    });
    it('clicks the Register button', () => {
        mockHandleRegister.mockImplementation((e) => {e.preventDefault()});
        const theVal = screen.getByRole('button', {name: /register-button/i});
        fireEvent.click(theVal);

        expect(mockHandleRegister.mock.calls.length).toBe(1);
        // expect(mockHandleClick()).toBe('Log in'); 
    });

    it('renders a Login section', () => {
        let theVal = screen.getByRole('presentation', { name: /^login$/i});
        expect(theVal).toHaveTextContent('Login');
    });
    it('renders a Login link', () => {
        let theVal = screen.getByRole('link', { name: /login-link/i});
        expect(theVal).toHaveTextContent('Login');
    });
    it('clicks the Login link', () => {
        const theVal = screen.getByRole('link', {name: /login-link/i});
        fireEvent.click(theVal);

        // expect(theVal).toHaveBeenClicked() // FIXME: find the appropriate matcher
    });

    // it('renders a snapshot', () => {
    //     const tree = renderer.create(<ThemeProvider theme= { theme }><RegisterDisplay handlers={mockHandlers()}/></ThemeProvider>).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
}); // end component

