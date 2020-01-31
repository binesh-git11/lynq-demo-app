import React, { useState, useEffect } from 'react'

import ProductDialog from './ProductDialog'

export default function (props) {
  let {
    product
  } = props

  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const handleOpenProductDialog = () => {
    setDialogIsOpen(true)
  }


  return (
    <div className="productButton-l1" onClick={()=>handleOpenProductDialog()}>
      <ProductDialog open={dialogIsOpen} product={product} onClose={()=>setDialogIsOpen(false)}/>
      <div className="image">
        <img src={product.image_url} />
      </div>
      <div className="title">
        {product.name}
      </div>
    </div>
  )
}