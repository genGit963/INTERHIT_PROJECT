import React from 'react';
import AppNavigator from './src/navigation';
import {LanguageContextProvider} from './src/context/language';

export function App() {
  return (
    <LanguageContextProvider>
      <AppNavigator />
    </LanguageContextProvider>
  );
}
export default App;
