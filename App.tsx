import React from 'react';
import AppNavigator from './src/navigation';
import {LanguageContextProvider} from './src/context/language';
// import {StyleSheet} from 'react-native';

export function App() {
  return (
    <LanguageContextProvider>
      <AppNavigator />
    </LanguageContextProvider>
  );
}

// const styles = StyleSheet.create({
//   GestureScreenHandler: {flex: 1},
// });

export default App;
