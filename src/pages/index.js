/*import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);*/

//changes

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

//import rootReducer from './reducers';
import counterReducer from '../redux/counterSlice';
import store from '../redux/store';

import App from './App';

//add persist https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducers = combineReducers({
  counter: counterReducer,
  //mdicts: dictsReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);
//const persistedReducer = persistReducer(persistConfig, counterReducer); //this line throws error, use combineReducers to fix and mix more reducers if needed

const store_conf = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store_conf);

ReactDOM.render(
  <Provider store={store_conf}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
