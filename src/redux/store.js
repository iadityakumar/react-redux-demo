import { createStore, applyMiddleware } from 'redux'
import expireReducer from 'redux-persist-expire';
import { persistStore, persistCombineReducers } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// import rootReducer from './rootReducer'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'


import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user"],
  transforms: [
    expireReducer('user', {
      // (Required) Seconds after which store will be expired
      expireSeconds: 5 * 5,
      // (Optional) State to be used for resetting e.g. provide initial reducer state
      expiredState: {},
      // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey` 
      // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
      autoExpire: true
    })
  ]
};
export const store = createStore(
  persistCombineReducers(persistConfig, {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
  }),
  // rootReducer,
  // composeWithDevTools(applyMiddleware(logger, thunk))
  composeWithDevTools(applyMiddleware(thunk))
)

// export default store
export const persistor = persistStore(store);
