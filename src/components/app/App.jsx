import React from 'react';
import Card from '../Card';
import {Provider} from 'react-redux';
import store from '../../redux/store';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Card/>
        </div>
      </Provider>
  );
}

export default App;
