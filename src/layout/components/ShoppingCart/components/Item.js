import React from 'react'

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function (props) {

  let {
    data,
    onAddToCart,
    onReduceFromCart,
    onRemoveItem,
  } = props

  function handleAddToCart() {
    if (onAddToCart)
      onAddToCart(data)
  }

  function handleReduceFromCart() {
    if (onReduceFromCart)
      onReduceFromCart(data.id)
  }

  function handleRemoveItem() {
    if (onRemoveItem)
      onRemoveItem(data.id)
  }

  return (
    <div className="item-l1">

      <div className="image">
        <div className="tag">
          <span>&pound;</span> {data.abv}
        </div>
        <img src={data.image_url} />
      </div>
      <div className="infoWrapper">
        <div className="info">
          <span className="title">{data.name}</span><br />
          <span className="subTitle">{data.subTitle}</span>
        </div>
        <div className="controls">
          <button className="button left" onClick={handleReduceFromCart}>-</button>
          <div className="quantity">{data.quantity}</div>
          <button className="button right" onClick={handleAddToCart}>+</button>
        </div>
        <DeleteOutlineIcon onClick={handleRemoveItem} className="icon" />
      </div>
    </div>
  )
}