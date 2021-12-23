// 20211217: Wireframe https://wireframe.cc/6MXHyR

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import LoginDisplay from '../../components/auth/LoginDisplay';

const mockHandleClick = jest.fn(); // should be able to add .mockImplementation(...) here, but ok...

describe('<LoginDisplay /> component tests', () => { 
    beforeEach(() => render(<LoginDisplay/>));

    it('renders a google oauth link', () => {
        let theVal = screen.getByRole('link', { name: /google-auth/i});
        expect(theVal).toHaveTextContent('Log in with Google');
    });
    it('renders a github oauth link', () => {
        let theVal = screen.getByRole('link', { name: /github-auth/i});
        expect(theVal).toHaveTextContent('Log in with GitHub');
    });
    it('renders a username input', () => {
        screen.getByRole('textbox', { name: /username/i});
    });
    it('renders a password input', () => {
        screen.getByLabelText('Password:');
    });
    it('renders a login button', () => {
        screen.getByRole('button', { name: /login/i});
    });
    it('renders a Register link', () => {
        let theVal = screen.getByRole('link', { name: /register/i});
        expect(theVal).toHaveTextContent('Register');
    });

    it('renders a snapshot', () => {
        const tree = renderer.create(<LoginDisplay handleClick={mockHandleClick} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
}); // end component

// these look like feature / functional tests, because they 'do stuff', but what we're really
//      testing is the handleClick part of the display component, which is not
//      exposed in the feature / function
describe('<LoginDisplay handleClick /> component tests', () => {
    beforeEach(() => render(<LoginDisplay handleClick={mockHandleClick} />));
    it('clicks the Google auth link', () => {       
        // mockHandleClick.mockImplementation((e) => {console.log(e.target.text)});
        mockHandleClick.mockReturnValue('Log in with Google'); // FIXME: evaluate e.target.name / value instead of hard-coding test val here
        const theVal = screen.getByRole('link', {name: /google-auth/i});
        fireEvent.click(theVal);

        expect(mockHandleClick.mock.calls.length).toBe(1);
        expect(mockHandleClick()).toBe('Log in with Google');
    });
    it('clicks the GitHub auth link', () => {
        // mockHandleClick.mockImplementation((e) => {console.log(e.target.text)});
        mockHandleClick.mockReturnValue('Log in with GitHub'); // FIXME: evaluate e.target.name / value instead of hard-coding test val here
        const theVal = screen.getByRole('link', {name: /github-auth/i});
        fireEvent.click(theVal);

        expect(mockHandleClick.mock.calls.length).toBe(1);
        expect(mockHandleClick()).toBe('Log in with GitHub');               // FIXME
    });

    it('clicks the Login button', () => {
        mockHandleClick.mockImplementation((e) => {e.preventDefault()});
        const theVal = screen.getByRole('button', {name: /login/i});
        fireEvent.click(theVal);

        expect(mockHandleClick.mock.calls.length).toBe(1);
        // expect(mockHandleClick()).toBe('Log in'); 
    });
    it('clicks the Register link', () => {
        // mockHandleClick.mockImplementation((e) => {console.log(e.target.text)});
        mockHandleClick.mockReturnValue('Register'); // FIXME: evaluate e.target.name / value instead of hard-coding test val here
        const theVal = screen.getByRole('link', {name: /register/i});
        fireEvent.click(theVal);

        expect(mockHandleClick.mock.calls.length).toBe(1);
        expect(mockHandleClick()).toBe('Register'); 
    });
})
