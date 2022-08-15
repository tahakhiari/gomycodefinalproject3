import axios from 'axios'
import { GET_Albums, ADD_Album,UPDATE_ALBUM } from '../constants/actionsTypes'


export const get_Albums = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:7000/albums')
        dispatch({ type: GET_Albums, payload: data })
    } catch (error) {
        console.log(error)
    }
}
export const add_Albums = ({ name, description, image, prix }) => async (dispatch) => {
    console.log("working")
    await axios.post("http://localhost:7000/albums/add", { name, description, image, prix })
        .then(res => dispatch({ type: ADD_Album, payload: res.data }))
        .catch(err => console.log(err))
}
export const updateAlbum = ({ name, description, image, prix,id }) => async (dispatch) => {
    console.log(name)
    await axios.put(`http://localhost:7000/albums/${id}`, { name, description, image, prix })
        .then(res => dispatch({ type: UPDATE_ALBUM, payload: res.data }))
        .catch(err => console.log(err))
}