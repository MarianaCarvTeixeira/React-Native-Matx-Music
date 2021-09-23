import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { API, graphqlOperation } from "aws-amplify"
import { getAlbum } from "../src/graphql/queries"
import { Album } from '../types';
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

export type AlbumHeaderProps = {
    album: Album
}
export default function PlayerScreen(props: AlbumHeaderProps) {
    const { album } = props;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: album.imageUri }} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} likes</Text>
                <TouchableOpacity>
                    <FontAwesome name="heart-o" size={20} color='white' />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Ionicons name="caret-back-outline" size={28} color='white' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="caret-forward-circle-outline" size={28} color='white' />
                    {/* pause-circle-outline */}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="caret-forward-outline" size={28} color='white' />
                </TouchableOpacity>
                <View />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
        justifyContent: 'center'
    },
    image: {
        width: 220,
        height: 220,
        margin: 10,
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",

    },
    infoContainer: {
        flexDirection: 'row',
    },
    creator: {
        color: 'lightgray',
        fontSize: 15,
        margin: 5,
    },
    likes: {
        color: 'lightgray',
        fontSize: 15,
        margin: 5,
        marginRight: 25
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        justifyContent: 'space-between',
        margin: 10
    },
});
