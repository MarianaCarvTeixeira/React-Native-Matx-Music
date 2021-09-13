import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
      data={albumCategories}
      renderItem={({item})=> 
      <AlbumCategory title={item.title} albums={item.albums}/>}
      keyExtractor={(item)=> item.id}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})