import React from "react";

import "./NavSubMenu.scss";

const generateMenuLinks = (childrenData) => {
  if (!childrenData) return;
  console.log(`childrenData: `, childrenData);
};

const NavSubMenu = ({ childrenData }) => {
  return <div className="sub-menu">{generateMenuLinks(childrenData)}</div>;
};

export default NavSubMenu;
