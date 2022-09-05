import {
    ADD_CONTACT_FAIL,
    ADD_CONTACT_SUCCESS,
    GET_ALL_CONTACT_FAIL,
    GET_ALL_CONTACT_SUCCESS,
    GET_ONE_CONTACT_FAIL,
    GET_ONE_CONTACT_SUCCESS,
    LOADING_CONTACT,
    UPDATE_CONTACT_FAIL,
    UPDATE_CONTACT_SUCCESS,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAIL
  } from "../constants/contactConstante";
  import axios from "axios";
  
  export const getALLmessage = () => async (dispatch) => {
    
    dispatch({ type: LOADING_CONTACT });
    try {
      const response = await axios.get(
        "http://localhost:5000/contact/AllMessage",
        {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
      )
      dispatch({
        type: GET_ALL_CONTACT_SUCCESS,
        payload: response.data
        
      });
    } catch (error) {
      dispatch({ type: GET_ALL_CONTACT_FAIL, payload: error });
    }
  };
  
  export const sendMessage = (newContact) => async (dispatch) => {
      try {
      const response = await axios.post(
        "http://localhost:5000/contact/Sendmessage",
        newContact,
        
      );
      console.log(response)
      dispatch({ type: ADD_CONTACT_SUCCESS });
      //dispatch(getALLCourses())
      //navigate("/")
    } catch (error) {
      console.log(error);
      
      dispatch({ type: ADD_CONTACT_FAIL,payload:error });
    }
  };
  
  export const deleteMessage = (id) => async (dispatch) => {
      try {
        const response = await axios.delete(`http://localhost:5000/contact/${id}`);
        dispatch({
          type: DELETE_CONTACT_SUCCESS,
        });  
        dispatch(getALLmessage())
      } catch (error) {
        dispatch({ type: DELETE_CONTACT_FAIL, payload: error });
      }
    };
  
    
  export const getOneMessage = (id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/contact/${id}`);
      dispatch({
        type: GET_ONE_CONTACT_SUCCESS,
        payload: response.data
      }); 
    } catch (error) {
      dispatch({ type: GET_ONE_CONTACT_FAIL, payload: error });
    }
  };
  