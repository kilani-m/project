import {
    ADD_CONTACT_FAIL,
    DELETE_CONTACT_FAIL,
    GET_ALL_CONTACT_FAIL,
    GET_ALL_CONTACT_SUCCESS,
    GET_ONE_CONTACT_FAIL,
    GET_ONE_CONTACT_SUCCESS,
    LOADING_CONTACT,
    UPDATE_CONTACT_FAIL,
  } from "../constants/contactConstante";
  
  const initialState = {
    loading: false,
    contacts: [],
    errors: null,
    oneContact: {},
  };
  
  export const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_CONTACT:
        return { ...state, loading: true };
      case GET_ALL_CONTACT_SUCCESS:
        return { ...state, contacts: payload, loading: false };
      case GET_ALL_CONTACT_FAIL:
        return { ...state, loading: false, errors: payload };
      case ADD_CONTACT_FAIL:
        return { ...state, errors: payload };
      case DELETE_CONTACT_FAIL:
        return { ...state, errors: payload };
      case GET_ONE_CONTACT_SUCCESS:
        return { ...state, oneContact: payload };
      case GET_ONE_CONTACT_FAIL:
        return { ...state, errors: payload };
      case UPDATE_CONTACT_FAIL:
        return { ...state, errors: payload };
      default:
        return state;
    }
  };
  