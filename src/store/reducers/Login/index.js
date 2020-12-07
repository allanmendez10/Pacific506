import {
    SET_LOGIN, SET_USER_LOGGED, SET_ERROR
  } from '../../actions/actionType';
  
  
  const initialState = {
    user: null,
    is_logged: false,
    userError: null,
  };
  
  export default (state = initialState, {type, payload}) => {
    switch (type) {
      case SET_LOGIN:
        return {...state, is_logged: payload };
  
      case SET_USER_LOGGED:
        return {...state, user: payload};
  
      case SET_ERROR:
        return {...state, userError: payload};
  
      default:
        return state;
    }
  };
  