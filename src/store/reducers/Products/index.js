import {
  SET_CURRENT_PRODUCT,
  SET_ERROR,
  SET_LOADED,
  SET_PRODUCTS,
} from '../../actions/actionType';

const initialState = {
  products: [],
  loaded: false,
  currentProduct: null,
  productError: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRODUCTS:
      return {...state, products: payload};

    case SET_LOADED:
      return {...state, loaded: payload};

    case SET_CURRENT_PRODUCT:
      return {...state, currentProduct: payload};

    case SET_ERROR:
      return {...state, postError: payload};

    default:
      return state;
  }
};
