import React, { useContext } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, } from 'react-native'
import { Song } from '../../types';
import styles from './styles'
import { AppContext } from '../../AppContext';

export type SongListProps = {
    song: Song
}

export default function SongList(props: SongListProps) {
    const { song } = props;

    const {setSongId} = useContext(AppContext);

    const onPlay = () => {
        setSongId(song.id);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlay}>
                <View>
                    <Image source={{ uri: song.imageUri }} style={styles.image} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}