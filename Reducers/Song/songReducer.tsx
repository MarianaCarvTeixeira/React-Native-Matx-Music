export default function SongReducer(state = {}, action) {

    switch (action.type) {
        case 'SET_SONG':
            return action.payload;
            default: return state
    }
}