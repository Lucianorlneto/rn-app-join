/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Toast from 'react-native-toast-message';
import Main from './navigation/Main';

import AuthContext, { AuthProvider } from './context/auth';

const App: () => Node = () => (
  <NavigationContainer>
    <AuthProvider>
      <Main />
    </AuthProvider>
    <Toast />
  </NavigationContainer>
);

export default App;
