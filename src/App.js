import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './features/auth/login';
import Dashboard from './features/dashboard/dashboard';

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
          <Route path='/' exact><Login /></Route>
          <Route path='/login' exact><Login /></Route>
          <Route path='/dashboard' exact><Dashboard /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

