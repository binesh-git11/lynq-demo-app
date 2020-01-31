import React, { useState, useEffect } from 'react';

import Dialog from '@material-ui/core/Dialog';

import { connect } from "react-redux"
import { addToCart } from "../../../../store/actions/cart"

import SimpleBar from 'simplebar-react';


function Index(props) {
  const {
    open: _open,
    product,
    addToCart,
  } = props;

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(_open)
  }, [_open])

  function handleAddToCart() {
    if (addToCart) {
      addToCart(product)
      handleClose()
    }
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <Dialog open={open} classes={{ root: 'dialog-l1', paper: 'paper' }} maxWidth="sm">
      {product &&
        <div className="container">
          <button className="close" onClick={handleClose}>CLOSE</button>
          <div className="contentWrapper">
            <div className="content left">
              <b>{product.name}</b><br />
              <span>{product.tagline}</span><br />
              <SimpleBar style={{maxHeight: '90px'}}>
                <span className="desc">
                  {product.description}
                </span>
              </SimpleBar>
            </div>
            <div className="content right">
              <div className="imageWrapper">
                <img src={product.image_url} />
              </div>
              <button className="button" onClick={() => handleAddToCart()}>ADD TO CART</button>
            </div>
          </div>
        </div>
      }
    </Dialog >
  );
}

export default connect(
  null,
  { addToCart },
)(Index)
