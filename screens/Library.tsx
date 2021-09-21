import * as React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import LibraryData from '../components/Reducer/Reducer';
import SongList from '../components/SongList';

export default function Library() {


    return (
        <View>
            <View>
                <Image source={{ uri: '../assets/images/M.png' }} style={{ width: 80, height: 80 }} />
                <Text style={{ color: 'white' }}>Olá, Mariana Carvalho!</Text>
            </View>
            <FlatList
                data={data.LibraryData}
                renderItem={({ item }) => <SongList song={item} />}
                keyExtractor={(item) => item.id} />
        </View>
    )
}