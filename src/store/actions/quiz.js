import axios from "../../axios/axios-quiz";
import {
  FETCH_QUIZLES_START,
  FETCH_QUIZLES_SUCCESS,
  FETCH_QUIZLES_ERROR,
} from "./actionTypes";

export function fetchQuizes() {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());
    try {
      const response = await axios.get("/quizes.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`,
        });
      });

      dispatch(fetchQuizesSuccess(quizes));
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZLES_START,
  };
}
export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZLES_SUCCESS,
    quizes,
  };
}
export function fetchQuizesError(e) {
  return {
    type: FETCH_QUIZLES_ERROR,
    error: e,
  };
}
