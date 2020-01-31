/* eslint-disable default-case */
import produce from "immer";

import {
  ADD_TO_CART,
  REDUCE_FROM_CART,
  REMOVE_ITEM
} from "../../config/actionNames";


const initialState = {
  allIds: [],
  byIds: {}
}

export default produce((state = initialState, action) => {

  let {
    allIds,
    byIds
  } = state
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART: {
      let { product } = payload
      if (!byIds[product.id]) {
        allIds.push(product.id)
        byIds[product.id] = { ...product, quantity: 1 }
        return
      } else {
        byIds[product.id].quantity += 1
        return
      }
    }
    case REDUCE_FROM_CART: {
      let { id } = payload
      if (byIds[id].quantity > 1){
        byIds[id].quantity -= 1
        return
      }
      else {
        for (let i = 0; i < allIds.length; i++) {
          if (allIds[i] === id) {
            allIds.splice(i, 1)
            if (byIds[id])
              delete byIds[id]
          }
        }
        return
      }
    }

    case REMOVE_ITEM: {
      let { id, product } = payload
      for (let i = 0; i < allIds.length; i++) {
        if (allIds[i] === id) {
          allIds.splice(i, 1)
          if (byIds[id])
            delete byIds[id]
        }
      }
      return
    }

    default: return state
  }
}, initialState);