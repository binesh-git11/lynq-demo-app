import {FETCH_ITEMS} from "../../config/actionNames"

import {
  DATA_FETCH_REJECTED,
  DATA_FETCH_PENDING,
  DATA_FETCH_FULFILLED
} from "../../config/status";

import axiosApi from "../../config/api";

export const fetchItems = () => async (dispatch) => {

  dispatch({
    type: FETCH_ITEMS,
    payload: { status: DATA_FETCH_PENDING, data: [] }
  });
  await axiosApi
    .get('/v2/beers')
    .then(response => {
      dispatch({
        type: FETCH_ITEMS,
        payload: {
          status: DATA_FETCH_FULFILLED,
          data: [...response.data],
        }
      });
    })
    .catch(error =>
      dispatch({
        type: FETCH_ITEMS,
        payload: {
          status: DATA_FETCH_REJECTED,
          data: []
        }
      })
    );
};