import { Platform } from 'react-native';

const config = {
  uri: Platform.OS === 'ios' ? 'http://localhost:3333' : 'http://10.0.3.2:3333'
};

export default config;
