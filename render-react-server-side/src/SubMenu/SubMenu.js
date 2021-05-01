import React from "react";

import "./SubMenu.scss";

const SubMenu = ({ SubMenuData }) => {
  return (
    <div className="sub-menu">
      {SubMenuData.map((menu) => {
        if (!menu) return null;
        return (
          <ul key={menu[0].name + "ul"}>
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
