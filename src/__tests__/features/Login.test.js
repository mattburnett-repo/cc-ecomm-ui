import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store.js'

import Login from '../../features/auth/login';

describe('<Login /> unit / functional tests', () => { 
    test.todo('it should have integration tests')
    // beforeEach(() => render(<Provider store={store}><Login /></Provider>)); 

    // it('accept a value for username', ()=> {
    //     const theElement = screen.getByRole('textbox', {name: /username/i});
    //     userEvent.type(theElement, 'asdf');
        
    //     expect(theElement).toHaveValue('asdf');
    // });
    // it('accepts a value for password', ()=> {
    //     const theElement = screen.getByLabelText('Password:');
    //     userEvent.type(theElement, 'asdf');
        
    //     expect(theElement).toHaveValue('asdf');
    // });

    // it('submits the form', () => {
    //     // TODO: not sure how to mock / test this. maybe as integration test...
    //     const theElement = screen.getByRole('button', { name: /login/i})
    //     userEvent.click(theElement); 
    // })
// }); // end unit / functional

// describe('<Login /> renders a snapshot', () => {
//     it('renders a snapshot', () => {
//         const tree = renderer.create(<Provider store={store}><Login /></Provider>).toJSON();
//         expect(tree).toMatchSnapshot();
//     });
})