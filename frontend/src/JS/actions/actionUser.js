import axios from 'axios'
import { GET_Users, ADD_Users, LOGIN, LOGOUT } from '../constants/actionsTypes'

// user liste
export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:7000/users')
        dispatch({ type: GET_Users, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//user Register
export const adduser = ({ name, email, phone, password }) => async (dispatch) => {
    await axios.post("http://localhost:7000/users/adduser", { name, email, phone, password })
        .then(res => dispatch({ type: ADD_Users, payload: res.data }))
        .catch(err => console.log(err))
}

//user login
export const login = ({ name, password, remember }) => async (dispatch) => {
    const { data } = await axios.post("http://localhost:7000/users/login", { name, password });
    dispatch({ type: LOGIN, payload: data })

    console.log(remember)
    if (remember == true) {
        localStorage.setItem('adminuser', JSON.stringify(data))
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
    localStorage.removeItem('adminuser')
}