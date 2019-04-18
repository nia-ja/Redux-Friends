import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    localStorage.removeItem("token");
    return axios
        .post('http://localhost:5000/api/login', {username: 'Lambda School', password: 'i<3Lambd4'})
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            if (err.response.status === 403) {
                localStorage.removeItem("token");
            }
            dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
        });
}

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get("http://localhost:5000/api/friends", {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
        // if (err.response.status === 403) {
        //   localStorage.removeItem("token");
        // }
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };