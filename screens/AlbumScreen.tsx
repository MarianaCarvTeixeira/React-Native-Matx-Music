import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native'
import albumDetails from '../data/albumDetails';
import SongList from '../components/SongList';


export default function AlbumScreen(){

    const route = useRoute();

    useEffect(() =>{
        console.log(route)
    }, [])

    return (
        <View>
            <SongList song={albumDetails.songs[0]}/>
        </View>
    )
}
