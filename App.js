import React from 'react';
import Navegador from './src/navigations/Navegador';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <RootSiblingParent>
          <Navegador />
        </RootSiblingParent>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
