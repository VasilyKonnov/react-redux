import {
  FETCH_QUIZLES_START,
  FETCH_QUIZLES_SUCCESS,
  FETCH_QUIZLES_ERROR,
  FETCH_QUIZ_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  quizes: [],
  loading: false,
  error: null,
  results: {},
  isFinished: false,
  activeQuestion: 0,
  answerState: null,
  quiz: null,
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
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        quiz: action.quiz,
      };
    case QUIZ_SET_STATE:
      return {
        ...state,
        answerState: action.answerState,
        results: action.results,
      };

    default:
      return state;
  }
}
