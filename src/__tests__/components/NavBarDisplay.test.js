// 20211217: any wireframe will do...

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux'
import store from '../../store'
import { MemoryRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'
// <ThemeProvider theme= { theme }> </ThemeProvider>

import NavBarDisplay from '../../components/nav/NavBarDisplay';

function mockHandlers() {
    return {
        handleHomeClick: jest.fn(),
        handleShowCartClick: jest.fn(),
        handleCheckoutClick: jest.fn(),
        handleCancelClick: jest.fn(),
        handleLogoutClick: jest.fn()
    }
}

describe('<NavBarDisplay /> component tests', () => {
    // only check basic rendering
    //      'calledFrom' - specific things belong in a feature test. this is a component test

    it('should render a NavBar display', () => { 
        render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBarDisplay calledFrom="" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
        screen.getByRole('presentation', {name: /nav-bar-container/i});
    });

    it('renders a snapshot', () => {
        const tree = renderer.create(<ThemeProvider theme= { theme }><Router><NavBarDisplay calledFrom="" handlers={mockHandlers()} /></Router><Provider store={store}><Router>
                                        <NavBarDisplay calledFrom="" handlers={mockHandlers()} />
                                    </Router></Provider>
                                    </ThemeProvider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

}); // end component test


