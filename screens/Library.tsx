import * as React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import {useSelector} from 'react-redux'

export default function Library() {

    const LibraryData = useSelector((state) => {return state})

    return (
        <View>
            <View>
                <Image source={{ uri: '../assets/images/eu' }} style={{ width: 80, height: 80 }} />
                <Text style={{ color: 'white' }}>Olá, Mariana Carvalho!</Text>
            </View>
            <View>{LibraryData}</View>
        </View>
    )
}