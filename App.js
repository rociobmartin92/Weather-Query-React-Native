import React from 'react';
import Navegador from './src/navigations/Navegador';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navegador />
    </SafeAreaProvider>
  );
}
