import {
  SET_CURRENT_PRODUCT,
  SET_ERROR,
  SET_LOADED,
  SET_PRODUCTS,
} from '../actionType';

import axios from 'axios';

export const setProductsRedux = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});

export const setLoadedRedux = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const setCurrentProductRedux = (payload) => ({
  type: SET_CURRENT_PRODUCT,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'http://192.168.2.1:3000/api/v1/product/getProducts',
    );

   //console.log(response.data.data);

    dispatch(setProductsRedux(response.data.data));
    dispatch(setLoadedRedux(true));
  } catch (e) {
    dispatch(setError(e));
    console.warn(e);
  }
};

export function getProductsFun() {
  return function (dispatch, getState) {};
}
