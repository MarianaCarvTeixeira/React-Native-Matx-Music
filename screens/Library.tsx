import React, { useEffect } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import SongList from '../components/SongList';
import { useSelector} from 'react-redux';


export default function Library() {

    const Library = useSelector((state)=> state.library);


    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image source={require('../assets/images/eu.jpg') } style={styles.image} />
                <Text style={styles.text}>Olá, Mariana Carvalho!</Text>
            </View>
            <FlatList
                data={Library}
                renderItem={({ item }) => <SongList song={item} />}
                keyExtractor={(item) => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      justifyContent: 'flex-start'
    },
    userContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        width: '100%'
    },
    image:{
        borderRadius: 50,
        borderColor: 'darkorange',
        borderWidth: 1.5,
        width: 65,
        height: 65,
        resizeMode: 'contain',
        marginHorizontal: 20,
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
  })