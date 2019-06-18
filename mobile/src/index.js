import React, { Component } from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

import Routes from './routes';

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
