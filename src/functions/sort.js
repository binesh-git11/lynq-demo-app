export default function (productArray, type, order) {

  let compaireFunction = (a, b) => {
    switch (type) {
      case 'abv': {
        switch (order) {
          case 'ascending': {
            return a.abv - b.abv
          }
          case 'descending': {
            return b.abv - a.abv
          }
          default: {
            return a.abv - b.abv
          }
        }
      }
      case 'name': {
        switch (order) {
          case 'ascending': {
            return a.name - b.name
          }
          case 'descending': {
            return b.name - a.name
          }
          default: {
            return a.name - b.name
          }
        }
      }
      default: {
        return (a, b) => 1
      }
    }
  }
  return productArray.sort((a, b) => compaireFunction(a, b))
}