import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native'

const album = {
    id:'11',
    name: 'good vibes',
    by: 'spotify',
    numberOfLikes: 38,
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
    artistsHeadLine: 'Ana Vitoria',
    Songs: [{
        id:1,
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
        title: 'Some Song',
        artist: 'Ana Vitoria',
    },
    {
        id:1,
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
        title: 'Some Song',
        artist: 'Ana Vitoria',
    },
    {
        id:1,
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
        title: 'Some Song',
        artist: 'Ana Vitoria',
    },
    {
        id:1,
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
        title: 'Some Song',
        artist: 'Ana Vitoria',
    },
    {
        id:1,
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
        title: 'Some Song',
        artist: 'Ana Vitoria',
    },
    {
        id:1,
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
        title: 'Some Song',
        artist: 'Ana Vitoria',
    },
    {
        id:1,
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71D5mOi3SdL._AC_SL1000_.jpg',
        title: 'Some Song',
        artist: 'Ana Vitoria',
    },
]
}





export default function AlbumScreen(){

    const route = useRoute();

    useEffect(() =>{
        console.log(route)
    }, [])

    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}
