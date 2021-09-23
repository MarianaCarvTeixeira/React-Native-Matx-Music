import {createStore} from "redux";

export default function LibraryReducer(state = [], action) {

    switch (action.type) {
        case 'Add':
            return [...state, action.payload];
        case 'Remove':
            return state.filter(st => st.id !== action.payload.id)
            default: return state
    }
}