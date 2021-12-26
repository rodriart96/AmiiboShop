import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";
import React from 'react';


const store = createStore(
    allReducers,
  );

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);