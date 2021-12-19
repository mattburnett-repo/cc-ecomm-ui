import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import Login from '../../features/auth/login';
// import { getUserData } from '../mockApi';

jest.mock("../mockApi", () => ({
    getUserData: () => ({ username: "qwer", password: "qwer" })
  }));

describe('<Login /> unit / functional tests', () => {
    beforeEach(() => render(<Login />));

    it('clicks the Google auth link', () => {
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
    it('clicks the Login button', () => {
        const theVal = screen.getByRole('button', {name: /login/i});
        fireEvent.click(theVal);

        // TODO: mock an onClick function and test that also
    });
    it('clicks the Register link', () => {
        const theVal = screen.getByRole('link', {name: /register/i});
        fireEvent.click(theVal);
    });
}); // end unit

describe('<Login /> renders a snapshot', () => {
    it('renders a snapshot', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})