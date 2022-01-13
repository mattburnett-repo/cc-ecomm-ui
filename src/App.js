
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
// import {ErrorBoundary} from './utils/ErrorBoundary';

import theme from './components/styles/Theme'
import GlobalStyles from './components/styles/GlobalStyles'

import { Container } from './components/styles/Container.styled'
import Header from './components/header/HeaderDisplay'

import Login from './features/auth/login';
import Register from './features/auth/register'
import Dashboard from './features/dashboard/dashboard';
// products listing
import ProductDetail from './features/product/productDetail'
import CartDetail from './features/cart/cartDetail'
import ShippingInfo from './features/shipping/shippingInfo';
import PaymentInfo from './features/payments/paymentInfo';
import ProcessOrder from './features/order/processOrder';
import OrderConfirmation from './features/order/orderConfirmation'
import ErrorDisplay from './components/error/ErrorDisplay';

// styled components
//          https://www.youtube.com/watch?v=02zO0hZmwnw&t=1359s

//  path='...' exact component={ () => <Component someProp= {propVal}} />

// TODO: find a way to persist data
//    zB https://dev.to/dawnind/persist-redux-state-with-redux-persist-3k0d
//       https://edvins.io/how-to-use-redux-persist-with-redux-toolkit

function App() {
  return (
    <ThemeProvider theme= { theme }>
      <GlobalStyles />
    
      <Container>
        <Router>  
          <Header />
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/dashboard' exact component={Dashboard} />
            {/* products listing */}
            <Route path="/product-detail/:id" exact component={ProductDetail} />
            <Route path='/cart-detail' exact component={CartDetail} />
            <Route path='/shipping-info' exact component={ShippingInfo} />
            <Route path='/payment-info' exact component={PaymentInfo} />
            <Route path='/process-order' exact component={ProcessOrder} />
            <Route path='/order-confirmation' exact component={OrderConfirmation} />
            <Route path='/error' exact component={ErrorDisplay} />
          </Switch> 
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
