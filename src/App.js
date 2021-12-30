import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './features/auth/login';
import Register from './features/auth/register'
import Dashboard from './features/dashboard/dashboard';
import ProductDetail from './features/product/productDetail'
import CartDetail from './features/cart/cartDetail'

// TODO: ReactStrap npm i bootstrap reactstrap
//        import 'bootstrap/dist/css/bootstrap.min.css'
//        reactstrap: https://youtu.be/R54neaLznFA?t=923
// TODO: React transition npm i react-transition-group
//        https://youtu.be/fcna-jJtAXk?t=116

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path='/' exact><Login /></Route>
          <Route path='/login' exact><Login /></Route>
          <Route path='/register' exact><Register /></Route>
          <Route path='/dashboard' exact><Dashboard /> </Route>
          <Route path="/product-detail/:id" exact><ProductDetail /></Route> 
          <Route path='/cart-detail' exact><CartDetail /> </Route> */}

          {/* ... component={ () => <Component someProp= {propVal}} /> */}
          <Route path='/' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path="/product-detail/:id" exact component={ProductDetail} />
          {/* <Route path="/product-detail/:id" exact component={ () => <ProductDetail productId={id} />} /> */}
          <Route path='/cart-detail' exact component={CartDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

