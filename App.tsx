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
import LibraryData from './components/Reducer/Reducer';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppContext } from './AppContext';
import Library from './screens/Library';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const LibraryData = useSelector((state) => { return state })
  const store = createStore(LibraryData);

  const [songId, setSongId] = useState<string | null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          songId,
          setSongId: (id: string) => setSongId(id),
        }}>
          <Provider store={store}>
            <LibraryData/>
            <Library/>
          </Provider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider >
    );
  }
}
