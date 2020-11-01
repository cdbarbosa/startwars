import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
import { Home } from './pages/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
