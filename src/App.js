
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './features/auth/login';
import Register from './features/auth/register'
import Dashboard from './features/dashboard/dashboard';
// products listing
import ProductDetail from './features/product/productDetail'
import CartDetail from './features/cart/cartDetail'
// shipping
// payment
// order confirmation

// TODO: ReactStrap npm i bootstrap reactstrap
//        import 'bootstrap/dist/css/bootstrap.min.css'
//        reactstrap: https://youtu.be/R54neaLznFA?t=923
// TODO: React transition npm i react-transition-group
//          https://youtu.be/fcna-jJtAXk?t=116

//  path='...' exact component={ () => <Component someProp= {propVal}} />

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/dashboard' exact component={Dashboard} />
          {/* products listing */}
          <Route path="/product-detail/:id" exact component={ProductDetail} />
          <Route path='/cart-detail' exact component={CartDetail} />
          {/* shipping */}
          {/* payment */}
          {/* confirmation */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

