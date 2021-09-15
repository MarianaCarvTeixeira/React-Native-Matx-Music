import React, { useEffect, useState } from 'react';
import { Text, View, Image, } from 'react-native'
import styles from './styles'
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Song } from "../../types";
import { Audio } from 'expo-av'
import { Sound } from "expo-av/build/Audio/Sound";
import { TouchableOpacity } from 'react-native-gesture-handler';

const song = {
    id: 1,
    uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
    title: 'Some Song',
    artist: 'Ana Vitoria',
}

export default function PlayerWidget() {

    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);

    const onPlaybackStatusUpdate = (status: any) => {
        setIsPlaying(status.isPlaying)
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(() => {
        playCurrentSong();
    }, [])

    const onPLayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync()
        } else {
            await sound.playAsync()
        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return;
        }
        return (position / duration) * 100;
    }
    

    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%`}]} />
            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Entypo name="dot-single" size={23} color='white' style={styles.dot} />
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="heart-o" size={25} color='white' />
                        <TouchableOpacity onPress={onPLayPausePress}>
                            <Ionicons name={isPlaying ? "pause" : "play"} size={28} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


