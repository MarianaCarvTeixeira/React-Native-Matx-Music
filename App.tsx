import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PlayerWidget from './components/PlayerWidget';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppContext } from './AppContext';
import Library from './screens/Library';
import Reducer from './components/Reducer/Reducer';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  
  const Reducer = useSelector((state) => { return state })
  const store = createStore(Reducer);

  const [songId, setSongId] = useState<string | null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>

        <SafeAreaProvider>
        <Provider store={store}>
          <Library />
          <Reducer/>
        </Provider>
          <AppContext.Provider value={{
            songId,
            setSongId: (id: string) => setSongId(id),
          }}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <PlayerWidget />
          </AppContext.Provider>
        </SafeAreaProvider >
      </>
    );
  }
}
