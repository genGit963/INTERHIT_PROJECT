import React from 'react';
import AppNavigator from './src/navigation';
import {LanguageContextProvider} from './src/context/language';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
// import {StyleSheet} from 'react-native';

export function App() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LanguageContextProvider>
          <AppNavigator />
        </LanguageContextProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
