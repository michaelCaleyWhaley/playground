import React, { useState } from "react";
import classNames from "classnames";
import SubMenu from "../SubMenu";
import formatMenuData from "../helpers/formatMenuData";
import { navCatagories } from "../testData.json";

import "./Nav.scss";

const generateMenu = (menuData) => {
  return menuData.map((menu) => {
    const [isOpen, setIsOpen] = useState(false);
    const { name, href, subMenu: SubMenuData } = menu;
    return (
      <li
        key={name + "nav"}
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        className={classNames("nav__item", { "nav__item--open": isOpen })}
      >
        <a className="nav__anchor" href={href} title={name}>
          {name}
        </a>
        <SubMenu SubMenuData={SubMenuData} />
      </li>
    );
  });
};

const Nav = () => {
  const menuData = formatMenuData(navCatagories);
  return (
    <nav className="nav">
      <ul className="nav__list">{generateMenu(menuData)}</ul>
    </nav>
  );
};

export default Nav;
