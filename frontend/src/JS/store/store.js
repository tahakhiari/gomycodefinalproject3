import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { getUsersReducer, addUserReducer, loginReducer } from "../reducers/reducerUser"
import { getAlbumsReducer } from "../reducers/reducerAlbum"
import { addAlbumReducer,updateAlbumReducer } from "../reducers/reducerAlbum"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducer = combineReducers({
    usersListe: getUsersReducer,
    userAdd: addUserReducer,
    Albums: getAlbumsReducer,
    userLogin: loginReducer,
    Addalbum: addAlbumReducer,
    updateAlbum:updateAlbumReducer
})
const middleware = [thunk]
const initialState = {
    userLogin: localStorage.getItem('adminuser') || {},
}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store