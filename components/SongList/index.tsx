import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, } from 'react-native'
import { Song } from '../../types';
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux';

export type SongListProps = {
    song: Song
}

export default function SongList(props: SongListProps) {
    const { song } = props;

    const songId = useSelector((state) => state.songId)
    const dispatch = useDispatch()
    

    const onPlay = async () => {
       await dispatch({ type: 'SET_SONG_ID', payload: song.id })
       console.log(songId)
    }

    return (

        <TouchableWithoutFeedback onPress={onPlay}>
            <View style={styles.container}>
                    <Image source={{ uri: song.imageUri }} style={styles.image} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}