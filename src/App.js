
import './App.css';

// import Login from './features/auth/login';
// import BrowseSearch from './features/nav/BrowseSearch';
import Dashboard from './features/dashboard/dashboard';

// TODO: add Router
// TODO: ReactStrap npm i bootstrap reactstrap
//        import 'bootstrap/dist/css/bootstrap.min.css'
//        reactstrap: https://youtu.be/R54neaLznFA?t=923
// TODO: React transition npm i react-transition-group
//        https://youtu.be/fcna-jJtAXk?t=116

function App() {
  return (
    <div className="App">
      {/* <BrowseSearch /> */}
      <Dashboard />
    </div>
  );
}

export default App;
