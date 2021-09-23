import {createStore} from "redux";

export default function CategoryReducer(state = [], action) {

    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload;
            default: return state

    }
}