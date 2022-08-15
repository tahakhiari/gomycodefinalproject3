
import { GET_Albums, ADD_Album, UPDATE_ALBUM } from '../constants/actionsTypes'

export const getAlbumsReducer = (state = { Albums: [] }, action) => {
    switch (action.type) {
        case GET_Albums:
            return {
                Albums: action.payload
            }
        default:
            return state
    }

}

export const addAlbumReducer = (state = { Album: {} }, action) => {
    switch (action.type) {
        case ADD_Album:
            return {
                Album: action.payload
            }
        default:
            return state
    }
}
export const updateAlbumReducer = (state = { Album: {} }, action) => {
    switch (action.type) {
        case UPDATE_ALBUM:
            return {
                Album: action.payload
            }
        default:
            return state
    }
}