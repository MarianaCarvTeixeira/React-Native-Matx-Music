import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import SongList from '../components/SongList';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Song } from '../types';

const getFavorites = async () => {
    try {
        const favoritesJson = await AsyncStorage.getItem('localFavorites')
        return favoritesJson != null ? JSON.parse(favoritesJson) : []
    } catch (e) {
        console.log(e)
    }
}

export default function Library() {

    const [favorites, setFavorites] = useState<Array<Song>>([])
    const getLocalFavorites = useCallback(async () => {

        const localFavorites = await getFavorites()
        setFavorites(localFavorites)
    }, [favorites])

    useEffect(() => {
        getLocalFavorites()
    }, [getLocalFavorites])

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image source={require('../assets/images/eu.jpg')} style={styles.image} />
                <Text style={styles.text}>Olá, Mariana Carvalho!</Text>
            </View>
            <View style={styles.songContainer}>
                <FlatList
                    data={favorites}
                    renderItem={({ item }) => <SongList song={item} />}
                    keyExtractor={(item) => item.id} />
            </View>
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
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        width: '100%'
    },
    image: {
        borderRadius: 50,
        borderColor: 'darkorange',
        borderWidth: 1.5,
        width: 65,
        height: 65,
        marginHorizontal: 20,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    songContainer: {
        margin: 20,
        width: '100%'
    },
})