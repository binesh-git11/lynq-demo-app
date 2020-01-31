import React, { useState, useEffect } from 'react'
// Material UI components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// Material UI Icons
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import SearchIcon from '@material-ui/icons/Search';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

// Libraries
import SwipeableViews from 'react-swipeable-views'

export default function (props) {

  let {
    onChangeMenuTab,
    onChangeSubMenuTab,
    menuTab,
    subMenuTab
  } = props

  const handleChangeMenuTab = (event, newValue) => {
    onChangeMenuTab(newValue)
  };

  const handleChangeSubMenuTab = (event, newValue) => {
    onChangeSubMenuTab(newValue)
  }

  return (
    <div className="header-l1">
      <div className="title">Demo App</div>
      <div className="tabs">
        <Tabs
          value={menuTab}
          variant="fullWidth"
          classes={{
            root: "menu-tabs-root",
            indicator: "menu-tabs-indicator"
          }}
          onChange={handleChangeMenuTab}
        >
          <Tab icon={<FreeBreakfastIcon className="icon" />} classes={{ root: "menu-tab-root" }} />
          <Tab icon={<RestaurantIcon className="icon" />} classes={{ root: "menu-tab-root" }} />
          <Tab icon={<LocalOfferIcon className="icon" />} classes={{ root: "menu-tab-root" }} />
          <Tab icon={<SearchIcon className="icon" />} classes={{ root: "menu-tab-root" }} />
        </Tabs>
        <SwipeableViews
          index={menuTab}
        >
          <Tabs
            value={subMenuTab}
            variant="fullWidth"
            classes={{
              root: "subMenu-tabs-root",
              indicator: "subMenu-tabs-indicator"
            }}
            onChange={handleChangeSubMenuTab}
          >
            <Tab classes={{ root: "subMenu-tab-root" }} label="ALL" />
            <Tab classes={{ root: "subMenu-tab-root" }} label="PIZZA" />
            <Tab classes={{ root: "subMenu-tab-root" }} label="STEAK" />
          </Tabs>
          <Tabs
            value={subMenuTab}
            variant="fullWidth"
            classes={{
              root: "subMenu-tabs-root",
              indicator: "subMenu-tabs-indicator"
            }}
            onChange={handleChangeSubMenuTab}
          >
            <Tab classes={{ root: "subMenu-tab-root" }} label="It's Empty!" />
          </Tabs>
          <Tabs
            value={subMenuTab}
            variant="fullWidth"
            classes={{
              root: "subMenu-tabs-root",
              indicator: "subMenu-tabs-indicator"
            }}
            onChange={handleChangeSubMenuTab}
          >
            <Tab classes={{ root: "subMenu-tab-root" }} label="It's Empty Too!" />
          </Tabs>
          <Tabs
            value={subMenuTab}
            variant="fullWidth"
            classes={{
              root: "subMenu-tabs-root",
              indicator: "subMenu-tabs-indicator"
            }}
            onChange={handleChangeSubMenuTab}
          >
            <Tab classes={{ root: "subMenu-tab-root" }} label="Dadaa! another Empty Tab :)" />
          </Tabs>
        </SwipeableViews>
      </div>
    </div>
  )
}