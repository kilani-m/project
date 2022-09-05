import {
  ADD_COURSES_FAIL,
  DELETE_COURSES_FAIL,
  GET_ALL_COURSES_FAIL,
  GET_ALL_COURSES_SUCCESS,
  GET_ONE_COURSES_FAIL,
  GET_ONE_COURSES_SUCCESS,
  LOADING_COURSES,
  UPDATE_COURSES_FAIL,
} from "../constants/coursesConstant";

const initialState = {
  loading: false,
  courses: [],
  errors: null,
  oneCOURSES: {},
};

export const coursesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_COURSES:
      return { ...state, loading: true };
    case GET_ALL_COURSES_SUCCESS:
      return { ...state, courses: payload, loading: false };
    case GET_ALL_COURSES_FAIL:
      return { ...state, loading: false, errors: payload };
    case ADD_COURSES_FAIL:
      return { ...state, errors: payload };
    case DELETE_COURSES_FAIL:
      return { ...state, errors: payload };
    case GET_ONE_COURSES_SUCCESS:
      return { ...state, oneCOURSES: payload };
    case GET_ONE_COURSES_FAIL:
      return { ...state, errors: payload };
    case UPDATE_COURSES_FAIL:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
