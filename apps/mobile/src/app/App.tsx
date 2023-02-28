/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Provider } from 'react-redux';
import {
  createRootStore,
} from '@phoenix/store';
import Home from './Home/home';

export const App = () => {

  const store = createRootStore();


  return (
    <Provider store={store} >
      <Home/>
    </Provider>
  );
};

export default App;
