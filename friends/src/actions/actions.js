import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START})
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => console.log(err));
};

export const GET_FR_START = 'GET_FR_START';
export const GET_FR_SUCCESS = 'GET_FR_SUCCESS';
export const GET_FR_FAILURE = 'GET_FR_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({type: GET_FR_START})
    axiosWithAuth()
        .get('http://localhost:5000/api/friends/')
        .then(res => {
            dispatch({ type: GET_FR_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_FR_FAILURE, payload: err})
        })
}