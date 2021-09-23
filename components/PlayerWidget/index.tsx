import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Sound } from "expo-av/build/Audio/Sound";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { API, graphqlOperation } from "aws-amplify"
import { getSong } from '../../src/graphql/queries';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import PlayerScreen from '../../screens/PlayerScreen';
import { Song } from '../../types';

export type SongProps = {
    song: Song
}
export default function PlayerWidget(props: SongProps) {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('PlayerScreen', { id: props.song.id },)
    };

    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);
    const [song, setSong] = useState(null);
    const [heart, setHeart] = useState(null);
    const [onHeart, setOnHeart] = useState<boolean>(false);
    const Library = useSelector((state) => state.library);
    const dispatch = useDispatch();
    const Song = useSelector((state) => state.song);
    const songId = useSelector((state) => state.songId)

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
                dispatch({ type: 'SET_SONG', payload: data.data.getSong })
                console.log(data.data.getSong)
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
            { uri: Song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(() => {
        if (Song) {
            playCurrentSong();
        }
    }, [Song])


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
        setOnHeart(!onHeart)
        if (!onHeart) {
            return dispatch({ type: 'Remove', payload: Song })
        } if (onHeart) {
            return dispatch({ type: 'Add', paylod: Song })
        }
        console.log(Library)
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return;
        }
        return (position / duration) * 100;
    }

    if (!Song) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={[styles.progress, { width: `${getProgress()}%` }]} />
                <View style={styles.row}>
                    <Image source={{ uri: Song.imageUri }} style={styles.image} />
                    <View style={styles.rightContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.title}>{Song.title}</Text>
                            <Entypo name="dot-single" size={23} color='white' style={styles.dot} />
                            <Text style={styles.artist}>{Song.artist}</Text>
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
        </TouchableWithoutFeedback>
    )
}
