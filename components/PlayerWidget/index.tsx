import React from 'react';
import { Text, View, Image, } from 'react-native'
import styles from './styles'
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const song = {
    id: 1,
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
    title: 'Some Song',
    artist: 'Ana Vitoria',
}

export default function PlayerWidget() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Entypo name="dot-single" size={23} color='white' style={styles.dot}/>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome name="heart-o" size={25} color='white' />
                    <Ionicons name="play" size={28} color='white' />
                </View>
            </View>
        </View>
    )
}