import React, { useState } from 'react'
import 'simplebar/dist/simplebar.min.css';

import Header from '../Header'
import ProductsWrapper from '../ProductsWrapper'
import ShoppingCart from "../ShoppingCart"

export default function () {

  const [menuTab, setMenuTab] = useState(0)
  const [subMenuTab, setSubMenuTab] = useState(0)

  return (
    <div className="app-l1">
      <Header subMenuTab={subMenuTab} menuTab={menuTab} onChangeMenuTab={(i) => setMenuTab(i)} onChangeSubMenuTab={i => setSubMenuTab(i)} />
      <ProductsWrapper menuTab={menuTab} subMenuTab={subMenuTab} onChangeMenuTab={(i) => setMenuTab(i)} onChangeSubMenuTab={i => setSubMenuTab(i)} />
      <ShoppingCart />
    </div>
  )
}