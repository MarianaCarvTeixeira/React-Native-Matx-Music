import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';

const albumCategory = {
  id: '1',
  title: 'Favoritos',
  albums: [
    {
      id: '1',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
      artistsHeadLine: 'Ana Vitoria',
    },
    {
      id: '2',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
      artistsHeadLine: 'Ana Vitoria',
    },
    {
      id: '3',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
      artistsHeadLine: 'Ana Vitoria',
    },
    {
      id: '4',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
      artistsHeadLine: 'Ana Vitoria',
    },
    {
      id: '5',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
      artistsHeadLine: 'Ana Vitoria',
    },
    {
      id: '6',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
      artistsHeadLine: 'Ana Vitoria',
    },
    {
      id: '7',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
      artistsHeadLine: 'Ana Vitoria',
    }
  ]

}

export default function Home() {
  return (
    <View style={styles.container}>
      <AlbumCategory title={ albumCategory.title} albums={albumCategory.albums} />
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