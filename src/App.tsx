/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import Main from './navigation/Main';

import { AuthProvider } from './context/auth';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <AuthProvider>
        <Main />
      </AuthProvider>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
