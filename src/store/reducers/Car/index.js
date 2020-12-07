import {
    CAR_PRODUCT_AMOUT,
    SET_ERROR
  } from '../../actions/actionType';
  
  const initialState = {
    amount: 0.0,
  };
  
  export default (state = initialState, {type, payload}) => {
    switch (type) {
      case CAR_PRODUCT_AMOUT:
        return {...state, amount: payload};
  
      case SET_ERROR:
        return {...state, postError: payload};
  
      default:
        return state;
    }
  };
  