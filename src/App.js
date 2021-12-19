
import './App.css';

import Login from './features/auth/login';

// don't need to install dotenv since react 'uses it under the hood'
//    https://stackoverflow.com/questions/42182577/is-it-possible-to-use-dotenv-in-a-react-project#56668716
        // With react-scripts@0.2.3 and higher, you can work with environment variables this way:

        // create .env file in the root of the project
        // set environment variables starting with REACT_APP_ there
        // access it by process.env.REACT_APP_... in components
        
// TODO: add Router

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
