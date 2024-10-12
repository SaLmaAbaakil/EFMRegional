import React from 'react';
import { Provider } from 'react-redux';
import store from './Employees/store/store';
import Composant1 from './Employees/components/composant1';
import Composant3 from './Employees/components/composant3'; 


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Composant1 />
        <Composant3 /> 
      </div>
    </Provider>
  );
}

export default App;
