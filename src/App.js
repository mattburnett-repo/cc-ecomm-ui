
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

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

// TODO: ReactStrap npm i bootstrap reactstrap
//        import 'bootstrap/dist/css/bootstrap.min.css'
//        reactstrap: https://youtu.be/R54neaLznFA?t=923
// TODO: React transition npm i react-transition-group
//          https://youtu.be/fcna-jJtAXk?t=116

//  path='...' exact component={ () => <Component someProp= {propVal}} />

// TODO: find a way to persist data
//    zB https://dev.to/dawnind/persist-redux-state-with-redux-persist-3k0d
//       https://edvins.io/how-to-use-redux-persist-with-redux-toolkit

function App() {
  return (
    <div className="App">
      <Router>  
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
        </Switch> 
      </Router>
    </div>
  );
}

export default App;

