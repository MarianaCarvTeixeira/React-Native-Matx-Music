import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native'
import SongList from '../components/SongList';
import{API, graphqlOperation} from "aws-amplify"
import {getAlbum} from "../src/graphql/queries"

export default function Search(){

    return (
        <View>
            <Text style={{color:'white'}} >Search</Text>
        </View>
    )
}
