// 20211217: any wireframe will do...

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux'
import store from '../../store'
import { MemoryRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'

import NavBar from '../../features/nav/navBar';

function mockHandlers() {
    return {
        handleHomeClick: jest.fn(),
        handleShowCartClick: jest.fn(),
        handleCheckoutClick: jest.fn(),
        handleCancelClick: jest.fn(),
        handleLogoutClick: jest.fn()
    }
}

// TODO: needs to test rendering based on calledFrom prop...
describe('<NavBar /> feature tests', () => {
    describe('general feature tests', () => {
        it('should render a NavBar display', () => { 
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('presentation', {name: /nav-bar-container/i});
        });
    }) // end general describe
    

    describe('dashboard tests', () => {
        it('should render a welcome message', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="dashboard" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            let theVal = screen.getByRole('presentation', {name: /header-message/i});  
            expect(theVal).toHaveTextContent('Hello')     
        })     

        it('should render cart items count', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="dashboard" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('presentation', {name: /header-current-cart-item-count/i});      
        })  

        it('should render a home button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="dashboard" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /go-home-button/i});      
        }) 
        it('should render a logout button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="dashboard" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /logout-button/i});      
        }) 
    }) // end dashboard

    // NavBar not called from products listings

    describe('product detail tests', () => {
        it('should render a welcome message', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="productDetail" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('presentation', {name: /header-message/i});     
        })  

        it('should render a show cart button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="productDetail" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /show-cart/i});      
        })
        it('should render a go home button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="productDetail" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /go-home-button/i});      
        })
        it('should render a logout button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="productDetail" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /logout-button/i});      
        })
    }) // end product detail

    describe('cart tests', () => {
        it('should render a header message', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="cart" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            let theVal = screen.getByRole('presentation', {name: /header-message/i});  
            expect(theVal).toHaveTextContent('Your Cart')   
        })  

        it('should render a go to checkout button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="cart" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /go-to-checkout/i});      
        })
        it('should render a go home button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="cart" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /go-home-button/i});      
        })
        it('should render a logout button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="cart" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /logout-button/i});      
        })
    }) // end cart

    // there isn't an 'order' component. shipping info, etc are the order

    describe('shipping info tests', () => {
        it('should render a header message', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="shippingInfo" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            let theVal = screen.getByRole('presentation', {name: /header-message/i});  
            expect(theVal).toHaveTextContent('Order Checkout')   
        })  

        it('should render a go home button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="shippingInfo" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /go-home-button/i});      
        })
        it('should render a logout button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="shippingInfo" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /logout-button/i});      
        })     
    }) // end shipping info

    describe('payment info tests', () => {
        it('should render a header message', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="paymentInfo" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            let theVal = screen.getByRole('presentation', {name: /header-message/i});  
            expect(theVal).toHaveTextContent('Order Checkout')   
        })  

        it('should render a go home button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="paymentInfo" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /go-home-button/i});      
        })
        it('should render a logout button', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="paymentInfo" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            screen.getByRole('button', {name: /logout-button/i});      
        }) 
    }) // end payment info

    describe('order confirmation tests', () => {
        it('should render a header message', () => {
            render(<ThemeProvider theme= { theme }><Provider store={store}><Router><NavBar calledFrom="orderConfirmation" handlers={mockHandlers()} /></Router></Provider></ThemeProvider>);
            let theVal = screen.getByRole('presentation', {name: /header-message/i});  
            expect(theVal).toHaveTextContent('Order Confirmation')   
        })  
    }) // end order confirmation
}); // end feature tests describe