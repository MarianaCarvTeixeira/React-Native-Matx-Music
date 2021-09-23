import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './Reducers/index'


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const store = createStore(combineReducers);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar/>
        </Provider>
      </>
    );
  }
}
