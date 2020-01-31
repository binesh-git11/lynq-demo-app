import { createSelector } from 'reselect';

export default
  createSelector(
    [
      handleCart,
    ],
    details => details
  )

function handleCart(state, props) {
  let { byIds, allIds } = state.cart
  let items = []
  let total = 0
  allIds.forEach(item => {
    total += byIds[item].abv * byIds[item].quantity
    items.push(byIds[item])
  });
  return {
    items ,
    total
  }
}