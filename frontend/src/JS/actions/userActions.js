import axios from "axios";
import {
  LOADING_USERS,
  GET_CANDIDAT_FAIL,
  GET_CANDIDAT_SUCCESS,
  GET_FORMATEUR_FAIL,
  GET_FORMATEUR_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  DELETE_CANDIDAT_SUCCESS,
  DELETE_CANDIDAT_FAIL,
  DELETE_FORMATEUR_SUCCESS,
  DELETE_FORMATEUR_FAIL,
} from "../constants/userConstants";

export const register = (newUser, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/Register",
      newUser
    );
    console.log(response)

    dispatch({ type: REGISTER_SUCCESS, payload: response.data.user});
    
    navigate("/Login");
  } catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};

export const login = (logedUser, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/Login",
      logedUser
    );
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    navigate("/Dashboard");
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const getCandidat = () => async (dispatch) => {
  dispatch({ type: LOADING_USERS });
  try {
    const response = await axios.get(
      "http://localhost:5000/users/allCandidat",
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
      dispatch({ type: GET_CANDIDAT_SUCCESS, 
      payload: response.data
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CANDIDAT_FAIL, payload: error });
  }
};

export const getFormateur = () => async (dispatch) => {
  dispatch({ type: LOADING_USERS });
    try {
    const response = await axios.get(
      "http://localhost:5000/users/allFormateur",
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    
    dispatch({ type: GET_FORMATEUR_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_FORMATEUR_FAIL, payload: error });
  }
};

export const deleteFormateur = (id) => async (dispatch) => {
  
  try {
    const response = await axios.delete(`http://localhost:5000/users/${id}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    
    dispatch({
      type: DELETE_FORMATEUR_SUCCESS
    });  
    dispatch(getFormateur())
  } catch (error) {
    dispatch({ type: DELETE_FORMATEUR_FAIL, payload: error });
  }
};

export const deleteCandidat = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/users/${id}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    dispatch({
      type: DELETE_CANDIDAT_SUCCESS,
    });  
    dispatch(getCandidat())
  } catch (error) {
    dispatch({ type: DELETE_CANDIDAT_FAIL, payload: error });
  }
};

export const logout = (navigate) => {
  navigate("/Login");
  return { type: LOGOUT };
};
