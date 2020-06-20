import {
  FETCH_QUIZLES_START,
  FETCH_QUIZLES_SUCCESS,
  FETCH_QUIZLES_ERROR,
} from "../actions/actionTypes";

const initialState = {
  quizes: [],
  loading: false,
  error: null,
};

export default function quizeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZLES_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_QUIZLES_SUCCESS:
      return {
        ...state,
        loading: false,
        quizes: action.quizes,
      };

    case FETCH_QUIZLES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
