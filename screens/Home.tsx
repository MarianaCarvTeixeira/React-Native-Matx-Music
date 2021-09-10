import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Album from '../components/Album';

const album = {
  id: '1',
  imageUri: 'https://upload.wikimedia.org/wikipedia/pt/7/75/Taylor_Swift_-_Fearless.jpg',
  artistsHeadLine:'Taylor Swift'
}

export default function Home(){
  return (
    <View style={styles.container}>
    <Album album={album}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})