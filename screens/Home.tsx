import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {API, graphqlOperation} from "aws-amplify"
import AlbumCategory from '../components/AlbumCategory';
import{listAlbumCategories} from '../src/graphql/queries'
import { useSelector, useDispatch } from 'react-redux';


export default function Home() {

  const[categories, setCategories] = useState([]);
  const albumCategories = useSelector((state) => state.category);
  const dispatch = useDispatch();

useEffect(()=>{
  const fetchAlbumCategories = async () =>{
    try{
      const data= await API.graphql(graphqlOperation(listAlbumCategories));
      dispatch ({type: 'SET_CATEGORY', payload: data.data.listAlbumCategories.items})
    } catch(e){
      console.log(e)
    }
  }
  fetchAlbumCategories();
}, [])

  return (
    <View style={styles.container}>
      <FlatList
      data={albumCategories}
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
