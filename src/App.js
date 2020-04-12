import React, { Component } from 'react';
import './global.css'

import { Provider } from 'react-redux';
import store from './store/index';

import InfoContainer from './components/InfoContainer';
import InputsContainer from './components/InputsContainer';
import OperationContainer from './components/OperationContainer';
import OutputContainer from './components/OutputContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <InfoContainer />
          <InputsContainer />
          <OperationContainer />
          <OutputContainer />
        </div>
      </Provider>
    );
  }

}

export default App;
