
import { GET_Users, ADD_Users, LOGIN, LOGOUT } from '../constants/actionsTypes'

export const getUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case GET_Users:
            return {
                users: action.payload
            }
        default:
            return state
    }
}
export const addUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADD_Users:
            return {
                user: action.payload
            }
        default:
            return state
    }
}
export const loginReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload
            }
        case LOGOUT:
            return {
                user: {}
            }
        default:
            return state
    }
}
