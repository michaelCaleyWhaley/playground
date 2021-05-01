import React, { useState } from "react";

import "./SubMenu.scss";

const SubMenu = ({ SubMenuData }) => {
  useState(() => {
    setTimeout(() => {
      document.querySelector(".nav__item").classList.add("nav__item--open");
    }, 500);
  }, []);

  return (
    <div className="sub-menu">
      {SubMenuData.map((menu) => {
        if (!menu) return null;
        return (
          <ul className="sub-menu__list" key={menu[0].name + "ul"}>
            {menu.map((column) => {
              return (
                <li key={column.name + "li"}>
                  <a href="/">{column.name}</a>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default SubMenu;
