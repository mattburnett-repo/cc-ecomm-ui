// 20211217: Wireframe https://wireframe.cc/6MXHyR

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';


import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import LoginDisplay from '../../components/auth/LoginDisplay';

const mockHandleClick = jest.fn(); // should be able to add .mockImplementation(...) here, but ok...
const mockHandleLogin = jest.fn();

function mockHandlers() {
    return {
        handleClick: mockHandleClick,
        handleLogin: mockHandleLogin,
    }
}

describe('<LoginDisplay /> component tests', () => { 
    test.todo('fix unexplainable problems')
    
    // beforeEach(() => render(<ThemeProvider theme= { theme }><LoginDisplay handlers={mockHandlers()} /></ThemeProvider>));

    // it('renders the display component', () => {
    //     screen.getByRole('presentation', { name: /^login-display$/i })
    // })

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

    // it('renders a login form', () => {
    //     screen.getByRole('presentation', { name: /login-display-form/i})
    // })
    // it('renders a username input', () => {
    //     screen.getByRole('textbox', { name: /username/i});
    // });
    // it('accept a value for username', ()=> {
    //     const theElement = screen.getByRole('textbox', {name: /username/i});
    //     userEvent.type(theElement, 'asdf');
        
    //     expect(theElement).toHaveValue('asdf');
    // });
    // it('renders a password input', () => {
    //     screen.getByLabelText('Password:');
    // });
    // it('accepts a value for password', ()=> {
    //     const theElement = screen.getByLabelText('Password:');
    //     userEvent.type(theElement, 'asdf');
        
    //     expect(theElement).toHaveValue('asdf');
    // });
    // it('renders a login button', () => {
    //     screen.getByRole('button', { name: /login/i});
    // });
    // it('clicks the Login button', () => {
    //     mockHandleLogin.mockImplementation((e) => {e.preventDefault()});
    //     const theVal = screen.getByRole('button', {name: /login/i});
    //     fireEvent.click(theVal);

    //     expect(mockHandleLogin.mock.calls.length).toBe(1);
    //     // expect(mockHandleClick()).toBe('Log in'); 
    // });

    // it('renders a Register section', () => {
    //     let theVal = screen.getByRole('presentation', { name: /^register$/i});
    //     expect(theVal).toHaveTextContent('Register');
    // });
    // it('renders a Register link', () => {
    //     let theVal = screen.getByRole('link', { name: /register-link/i});
    //     expect(theVal).toHaveTextContent('Register');
    // });
    // it('clicks the Register link', () => {
    //     const theVal = screen.getByRole('link', {name: /register-link/i});
    //     fireEvent.click(theVal);

    //     // expect(theVal).toHaveBeenClicked() // FIXME: find the appropriate matcher
    // });

    // it('renders a snapshot', () => {
    //     const tree = renderer.create(<ThemeProvider theme= { theme }><LoginDisplay handlers={mockHandlers()} /></ThemeProvider>).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
})
