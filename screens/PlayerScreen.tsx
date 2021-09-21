import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native'
import SongList from '../components/SongList';
import AlbumHeader from '../components/AlbumHeader';
import{API, graphqlOperation} from "aws-amplify"
import {getAlbum} from "../src/graphql/queries"

export default function PlayerScreen(){

    return (
        <View>
            <Text>Player</Text>
        </View>
    )
}