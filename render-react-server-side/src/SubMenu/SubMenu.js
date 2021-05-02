import React, { useState, memo } from "react";
import classNames from "classnames";

import "./SubMenu.scss";

const SubMenu = ({ SubMenuData, imageColumns = [] }) => {
  useState(() => {
    setTimeout(() => {
      document
        .querySelectorAll(".nav__item")[1]
        .classList.add("nav__item--open");
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
                <li
                  className={classNames("sub-menu__item", {
                    "sub-menu__item--header": column.isHeader,
                  })}
                  key={column.name + "li"}
                >
                  <a className="sub-menu__anchor" href="/">
                    {column.name}
                  </a>
                </li>
              );
            })}
          </ul>
        );
      })}

      {imageColumns.map((column) => {
        if (!column[0] || !column[0].imgSrc) return null;
        return (
          <ul
            className="sub-menu__img-column"
            key={column[0].imgTitle + "imgul"}
          >
            {column.map((image) => {
              if (!image.imgSrc) return null;
              return (
                <li key={image.imgTitle + "imgli"}>
                  <img
                    className="sub-menu__img"
                    src={image.imgSrc}
                    alt={image.imgTitle}
                  />
                  <p className="sub-menu__img-title">{image.imgTitle}</p>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default memo(SubMenu);
