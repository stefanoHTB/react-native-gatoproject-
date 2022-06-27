/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';

const App = () => {

  

  return (
    <AuthProvider>

      <AppNav />
   
    </AuthProvider>
  );
};

export default App;
