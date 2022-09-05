import {
    ADD_COURSES_FAIL,
    ADD_COURSES_SUCCESS,
    GET_ALL_COURSES_FAIL,
    GET_ALL_COURSES_SUCCESS,
    GET_ONE_COURSES_FAIL,
    GET_ONE_COURSES_SUCCESS,
    LOADING_COURSES,
    UPDATE_COURSES_FAIL,
    UPDATE_COURSES_SUCCESS,
    DELETE_COURSES_SUCCESS,
    DELETE_COURSES_FAIL
  } from "../constants/coursesConstant";
  import axios from "axios";
  
  export const getALLCourses = () => async (dispatch) => {
    
    dispatch({ type: LOADING_COURSES });
    try {
      const response = await axios.get(
        "http://localhost:5000/Courses/allCourses",
      {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
      )
      dispatch({
        type: GET_ALL_COURSES_SUCCESS,
        payload: response.data
        
      });
    } catch (error) {
      dispatch({ type: GET_ALL_COURSES_FAIL, payload: error });
    }
  };
  
  export const addCourses = (newCourses,navigate) => async (dispatch) => {
      try {
      const response = await axios.post(
        "http://localhost:5000/Courses/AddCourses",
        newCourses,
        {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
      );
      console.log(response)
      dispatch({ type: ADD_COURSES_SUCCESS });
      //dispatch(getALLCourses())
      navigate("/")
    } catch (error) {
      console.log(error);
      
      dispatch({ type: ADD_COURSES_FAIL,payload:error });
    }
  };
  
  export const deleteCourses = (id) => async (dispatch) => {
      try {
        const response = await axios.delete(`http://localhost:5000/Courses/${id}`);
        dispatch({
          type: DELETE_COURSES_SUCCESS,
        });  
        dispatch(getALLCourses())
      } catch (error) {
        dispatch({ type: DELETE_COURSES_FAIL, payload: error });
      }
    };
  
    
  export const getOneCourses = (id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/Courses/${id}`);
      dispatch({
        type: GET_ONE_COURSES_SUCCESS,
        payload: response.data
      }); 
    } catch (error) {
      dispatch({ type: GET_ONE_COURSES_FAIL, payload: error });
    }
  };
  export const updateOneCOURSES = (id, newOne, navigate) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:5000/Courses/${id}`, newOne);
      dispatch({
        type: UPDATE_COURSES_SUCCESS,
      });      
      dispatch(getALLCourses())
      navigate("/")
    } catch (error) {
      dispatch({ type: UPDATE_COURSES_FAIL, payload: error });
    }
  };