import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store'

import BrowseSearch from '../../features/nav/BrowseSearch';

describe('<BrowseSearch /> feature tests', () => {
    beforeEach(() => render(<Provider store={store}><BrowseSearch /></Provider>));

    test.todo('should display product categories from redux store')
    test.todo('should accept search text')
    test.todo('should dispatch search action')

    it('creates a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><BrowseSearch /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();  
    })
}); // end feature
