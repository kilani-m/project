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
  DELETE_CANDIDAT_FAIL,
  DELETE_FORMATEUR_FAIL,
} from "../constants/userConstants";

const initialState = {
  loading: false,
  users: [],
  errors: null,
  oneUser: {},
  currentUser: {},
  user: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, currentUser: payload.user };
    case REGISTER_FAIL:
      return { ...state, errors: payload };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, currentUser: payload.user };
    case LOGIN_FAIL:
      return { ...state, errors: payload };
    case LOADING_USERS:
      return { ...state, loading: true };
    case GET_CANDIDAT_SUCCESS:
      return { ...state, users: payload };
    case GET_CANDIDAT_FAIL:
      return { ...state, errors: payload };
    case GET_FORMATEUR_SUCCESS:
      return { ...state, users: payload };
    case GET_FORMATEUR_FAIL:
      return { ...state, errors: payload };

    case DELETE_CANDIDAT_FAIL:
      return { ...state, errors: payload };

    case DELETE_FORMATEUR_FAIL:
      return { ...state, errors: payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return { errors: null, currentUser: {} };
    default:
      return state;
  }
};
