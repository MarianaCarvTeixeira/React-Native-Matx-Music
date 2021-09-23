export default function SongIdReducer(state = {
    songId: null,
}, action) {

    switch (action.type) {
        case 'SET_SONG_ID':
            return action.payload;
            default: return state
    }
}