import { AUTH_SUCCESS, AUTH_LOGOUT } from "../actions/actionTypes";

const initialState = {
  taken: null,
};
export default function authReduser(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        taken: null,
      };
    default:
      return state;
  }
}
