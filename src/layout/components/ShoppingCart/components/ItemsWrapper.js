import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import SimpleBar from 'simplebar-react';

import Item from './Item'

import getCartSummary from "../../../../store/selectors/cart/getCartSummary"
import { addToCart, reduceFromCart, removeItem } from "../../../../store/actions/cart"

function Index(props) {
  let {
    cartItems: {
      items = []
    },
    addToCart,
    reduceFromCart,
    removeItem,
  } = props

  return (
    <div className="itemsWrapper-l1">
      <SimpleBar style={{maxHeight: '250px'}}>
        {
          items.map((item, i) => (
            <Item
              data={item}
              onAddToCart={addToCart}
              onReduceFromCart={reduceFromCart}
              onRemoveItem={removeItem}
            />
          ))
        }
      </SimpleBar>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: getCartSummary(state)
  }
}

export default connect(
  mapStateToProps,
  {
    addToCart,
    reduceFromCart,
    removeItem
  }
)(Index)