'use strict';

import React, {
  Component
} from 'react-native';

import { Provider } from 'react-redux/native';
import configureStore from './store/configure-store';

import App from './containers/app';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}