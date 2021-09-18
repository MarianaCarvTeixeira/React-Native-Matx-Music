import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {API, graphqlOperation} from "aws-amplify"
import AlbumCategory from '../components/AlbumCategory';
import{listAlbumCategories} from '../src/graphql/queries'


export default function Home() {

  const[categories, setCategories] = useState([]);

useEffect(()=>{
  const fetchAlbumCategories = async () =>{
    try{
      const data= await API.graphql(graphqlOperation(listAlbumCategories));
      setCategories(data.data.listAlbumCategories.items)
      console.log(data)
    } catch(e){
      console.log(e)
    }
  }
  fetchAlbumCategories();
}, [])

  return (
    <View style={styles.container}>
      <FlatList
      data={categories}
      renderItem={({item})=> (
      <AlbumCategory title={item.title} albums={item.albums.items}/>)}
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
