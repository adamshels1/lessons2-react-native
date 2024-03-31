
import { Provider } from 'react-redux'
import React from 'react';
import { store } from './lesson2/store/store'
import AppNavigator from './AppNavigator'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
};


export default App;
