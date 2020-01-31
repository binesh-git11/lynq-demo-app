import { createSelector } from 'reselect';

export default () =>
  createSelector(
    [
      checkId,
      state => state.products.data
    ],
    (id, items) => {
      if (!id) {
        return false
      }
      let itemData = items.forEach(item => {
        if (item.id === id)
          return {
            id: id,
            name: item.name,
            abv: item.abv,
            description: item.description,
            image: item.image_url,
            tagline: item.tagline
          }
      });
      return itemData
    }
  )

function checkId(state, props) {
  if (props.id){
    return props.id
  }
}