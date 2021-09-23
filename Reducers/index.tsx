import {combineReducers} from "redux"

import LibraryReducer from "./Library/libraryReducer"
import AlbumReducer from "./Album/albumReducer"
import CategoryReducer from "./Category/categoryReducer"
import SongReducer from "./Song/songReducer"
import SongIdReducer from "./SongId/SongId"

export default combineReducers({
    library: LibraryReducer,
    album: AlbumReducer,
    category: CategoryReducer,
    song: SongReducer,
    songId: SongIdReducer,
})
