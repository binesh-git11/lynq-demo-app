import React, { useState } from 'react'
import { connect } from "react-redux"

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { ClickAwayListener } from '@material-ui/core';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import cn from "class-names"

import ItemsWrapper from './components/ItemsWrapper'
import Options from './components/Options'

import getCartSummary from "../../../store/selectors/cart/getCartSummary"

export function Index(props) {

  let {
    cartItems
  } = props

  const [expand, setExpand] = useState(false)

  return (
    <div className={cn("ShoppingCart-l1", { "faded": expand })}>
      <ClickAwayListener onClickAway={() => setExpand(false)}>
        <ExpansionPanel classes={{ root: 'expansionPanel' }} expanded={expand}>
          <ExpansionPanelSummary classes={{ root: "Summary-root", content: 'summary-content' }} onClick={() => setExpand(!expand)}>
            <span>__</span>
            <ShoppingBasketIcon className="icon" />
            Shopping Cart
      </ExpansionPanelSummary>
          <ExpansionPanelDetails className="details">
            <ItemsWrapper items={cartItems.items.byIds} />
            <Options subTotal={cartItems.total} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ClickAwayListener>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: getCartSummary(state)
  }
}

export default connect(mapStateToProps)(Index)

