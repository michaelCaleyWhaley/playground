import React, { useEffect } from "react";
import classNames from "classnames";

import "./NavSubMenu.scss";

const generateLinks = (menuData) => {
  const links = menuData.map((data) => {
    const { name, custom_category_name, exclude_on_mobile, url_path } = data;
    const linkName = custom_category_name || name;
    const isOnMobile = exclude_on_mobile === 1 ? true : false;
    return (
      <li className="sub-menu__item">
        <a
          href={`/${url_path}`}
          className={classNames("sub-menu__link", {
            "sub-menu__link--hide-mobile": isOnMobile,
          })}
        >
          {linkName}
        </a>
      </li>
    );
  });
  return links;
};

const generateMenu = (menuData) => {
  if (!menuData) return;
  const column1 = menuData.filter((item) => {
    if (!item.include_in_menu_column2 && !item.include_in_menu_column2)
      return item;
    return false;
  });
  const column2 = menuData.filter((item) => {
    if (item.include_in_menu_column2) return item;
    return false;
  });
  const column3 = menuData.filter((item) => {
    if (item.include_in_menu_column3) return item;
    return false;
  });

  return [
    <ul className="sub-menu__list">{generateLinks(column1)}</ul>,
    column2.length > 0 && (
      <ul className="sub-menu__list">{generateLinks(column2)}</ul>
    ),
    column3.length > 0 && (
      <ul className="sub-menu__list">{generateLinks(column3)}</ul>
    ),
  ];
};

const NavSubMenu = ({ childrenData }) => {
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector("#root > nav > ul > li:nth-child(2)")
        .classList.add("nav--open");
    }, 500);
  }, []);
  return <div className="sub-menu">{generateMenu(childrenData)}</div>;
};

export default NavSubMenu;
