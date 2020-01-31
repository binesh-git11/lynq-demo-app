import { ADD_TO_CART, REDUCE_FROM_CART, REMOVE_ITEM } from "../../config/actionNames";

export const addToCart = (product) => (dispatch) => {
  dispatch(
    {
      type: ADD_TO_CART,
      payload: { product },
    }
  );
}

export const reduceFromCart = (id) => (dispatch) => {
  dispatch(
    {
      type: REDUCE_FROM_CART,
      payload: { id },
    }
  );
}

export const removeItem = (id) => (dispatch) => {
  dispatch(
    {
      type: REMOVE_ITEM,
      payload: { id },
    }
  );
}