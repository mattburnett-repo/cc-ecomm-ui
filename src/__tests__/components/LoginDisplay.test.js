// 20211217: Wireframe https://wireframe.cc/6MXHyR

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import LoginDisplay from '../../components/auth/LoginDisplay';

describe('<LoginDisplay /> component tests', () => {
    beforeEach(() => render(<LoginDisplay />));

    it('renders a google oauth button', () => {
        let theVal = screen.getByRole('button', { name: /google-auth/i});
        expect(theVal).toHaveTextContent('Log in with Google');
    });
    it('renders a github oauth button', () => {
        let theVal = screen.getByRole('button', { name: /github-auth/i});
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
        screen.getByRole('link', { name: /register/i});
    });

    it('renders a snapshot', () => {
        const tree = renderer.create(<LoginDisplay />).toJSON();
        expect(tree).toMatchSnapshot();
    });
}); // end component
