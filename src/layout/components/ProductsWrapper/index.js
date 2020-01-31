import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"

import SimpleBar from 'simplebar-react';

import SwipeableViews from 'react-swipeable-views'

import ProductButton from './components/ProductButton.js'

import CircularProgress from "../CircularProgress"

import { fetchItems } from "../../../store/actions/products"
import { DATA_FETCH_PENDING } from '../../../store/config/status/index.js';

function Index(props) {

  let {
    menuTab,
    subMenuTab,
    onChangeMenuTab,
    onChangeSubMenuTab,
    products: {
      status,
      data: _products = []
    },
    fetchItems
  } = props

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  useEffect(() => {
    if (_products.length)
      setProducts(_products)
  }, [_products])

  return (
    <div className="productsTab-l1">
    {status === DATA_FETCH_PENDING ? <CircularProgress className="empty"/> :
    <SimpleBar className="scrollContainer">
        <SwipeableViews
          index={menuTab}
          onChangeIndex={onChangeMenuTab}
          enableMouseEvents
        >
          <SwipeableViews
            index={subMenuTab}
            onChangeIndex={onChangeSubMenuTab}
            enableMouseEvents
          >
            <div className="productsWrapper">
              {products.map((beer, i) => (
                <ProductButton product={beer} />
              ))}
            </div>
            <div className="productsWrapper">
              {products.map((beer, i) => (
                <ProductButton product={beer} />
              ))}
            </div>
            <div className="empty">
              Just an Empty View
          </div>
          </SwipeableViews>
          <div className="empty">
            Empty Tab
          </div>
          <div className="empty">
            Another Empty tab!
          </div>
          <div className="empty">
            Its All Empty. <br />
            what are you looking for?
          </div>
        </SwipeableViews>
      </SimpleBar>
    }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(
  mapStateToProps,
  { fetchItems }
)(Index)