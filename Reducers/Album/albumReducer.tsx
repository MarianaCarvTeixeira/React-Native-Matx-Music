import {createStore} from "redux";

export default function AlbumReducer(state = {
    songs: {
        items:[]
    }
}, action) {

    switch (action.type) {
        case 'SET_ALBUM':
            return action.payload;
            default: return state

    }
}