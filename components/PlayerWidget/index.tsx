import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image, } from 'react-native'
import styles from './styles'
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Sound } from "expo-av/build/Audio/Sound";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppContext } from '../../AppContext';
import { API, graphqlOperation } from "aws-amplify"
import { getSong } from '../../src/graphql/queries';
import LibraryData from '../Reducer/Reducer';

export default function PlayerWidget() {

    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);
    const [song, setSong] = useState(null);
    const [heart, setHeart] = useState(null);
    const [onHeart, setOnHeart] = useState<boolean>(false);

    const { songId } = useContext(AppContext);

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
                setSong(data.data.getSong)
            } catch (e) {
                console.log(e)
            }
        }
        fetchSong();
    }, [songId])

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
        if (song) {
            playCurrentSong();
        }
    }, [song])

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

    const onHeartPress = async () => {
        if (!heart) {
            return;
        } if (onHeart) {

        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return;
        }
        return (position / duration) * 100;
    }

    if (!song) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]} />
            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Entypo name="dot-single" size={23} color='white' style={styles.dot} />
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={onHeartPress}>
                            <FontAwesome name={onHeart ? "heart" : "heart-o"} size={25} color='white' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPLayPausePress}>
                            <Ionicons name={isPlaying ? "pause" : "play"} size={28} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


