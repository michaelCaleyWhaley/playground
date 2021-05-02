import React, { useState } from "react";
import classNames from "classnames";
import SubMenu from "../SubMenu";
import formatMenuData from "../helpers/formatMenuData";
import { navCatagories } from "../testData.json";

import "./Nav.scss";

const generateMenu = (menuData) => {
  return menuData.map((menu) => {
    const [isOpen, setIsOpen] = useState(false);
    const { name, href, subMenu: SubMenuData, imageColumns } = menu;
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
          <span>{name}</span>

          <svg
            viewBox="0 0 16 9"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="nav__chevron"
          >
            <title>Path</title>
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Header/mobile/default"
                transform="translate(-266.000000, -62.000000)"
                fill="#1A1A1A"
                fill-rule="nonzero"
              >
                <g id="Group" transform="translate(118.000000, 50.000000)">
                  <polygon
                    id="Path"
                    points="163.322821 12 164 12.7023728 156 21 148 12.7023728 148.677179 12 156 19.5953605"
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <SubMenu SubMenuData={SubMenuData} imageColumns={imageColumns} />
      </li>
    );
  });
};

const Nav = ({ isMenuOpen, closeMenu }) => {
  const menuData = formatMenuData(navCatagories);
  return (
    <>
      <nav className={classNames("nav", { "nav--open": isMenuOpen })}>
        <ul className="nav__list">{generateMenu(menuData)}</ul>
      </nav>
      <div
        onClick={closeMenu}
        className={classNames("nav__overlay", {
          "nav__overlay--open": isMenuOpen,
        })}
      />
    </>
  );
};

export default Nav;
