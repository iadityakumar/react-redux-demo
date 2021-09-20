import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UsersContainer from './components/UsersContainer'

function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='App'>
          <UsersContainer />
          {/* <ItemContainer cake />
          <ItemContainer />
          <NewCakeContainer /> */}
          <CakeContainer />
          {/* <HooksCakeContainer />
          <IceCreamContainer /> */}
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
