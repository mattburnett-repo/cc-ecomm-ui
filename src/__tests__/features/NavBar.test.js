// 20211217: any wireframe will do...

// import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux'
import store from '../../store'

import NavBar from '../../features/nav/navBar';

// TODO: needs to test rendering based on calledFrom prop...
describe('<NavBar /> feature tests', () => {
    it('renders a snapshot', () => {
        const tree = renderer.create(<Provider store={store}><NavBar /></ Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
}); // end snapshot

