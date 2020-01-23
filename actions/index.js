import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "./actionTypes";
import * as firebase from 'firebase'

export const emailChanged = text => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
  };
  
  export const passwordChanged = text => {
    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
  };
  
  export const signupUser = ({ email, password }) => {
    return dispatch => {
      dispatch({ type: SIGNUP_USER });
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => signinUserSuccess(dispatch, user))
        .catch(() => signupUserFail(dispatch));
    };
  };
  
  export const signupUserFail = dispatch => {
    dispatch({ type: SIGNUP_USER_FAIL });
  };
  
  export const signinUserSuccess = (dispatch, user) => {
    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: user
    });
    Actions.main();
  };
  
  export const loginUser = ({ email, password }) => {
    return dispatch => {
      dispatch({ type: LOGIN_USER });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    };
  };
  
  export const loginUserFail = dispatch => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
  export const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  
    Actions.main();
  };
  