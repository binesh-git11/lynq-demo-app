/* eslint-disable default-case */
import produce from "immer";

import {
  FETCH_ITEMS
} from "../../config/actionNames";

import {
  DATA_FETCH_PENDING
} from "../../config/status"

const initialState = {
  status: DATA_FETCH_PENDING,
  data: []
}

export default produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ITEMS: {
      return {
        ...state,
        ...payload
      }
    }
  }
}, initialState);