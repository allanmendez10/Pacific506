import {
    CAR_PRODUCT_AMOUT,
    SET_ERROR
  } from '../actionType';
  
  
  export const setProductAmount = (payload) => ({
    type: CAR_PRODUCT_AMOUT,
    payload,
  });
  
  export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
  });
