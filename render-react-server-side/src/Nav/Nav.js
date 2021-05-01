import React, { useState } from "react";
import classNames from "classnames";
import NavSubMenu from "../NavSubMenu";
import { navCatagories } from "../testData.json";

import "./Nav.scss";

const generateTitleLinks = () => {
  return navCatagories.map(
    ({ url_path, children_data, custom_dropdown_link, fredhopper_id }) => {
      const [isOpen, setIsOpen] = useState(false);

      const key = fredhopper_id;
      const navLink = children_data[0]
        ? children_data[0].url_path
        : custom_dropdown_link;

      return (
        <li
          onMouseEnter={() => {
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            setIsOpen(false);
          }}
          className={classNames("nav__item", {
            "nav--open": isOpen,
          })}
        >
          <a key={key} className="nav__title" href={navLink} title={url_path}>
            {url_path}
          </a>
          <NavSubMenu childrenData={children_data} />
        </li>
      );
    }
  );
};

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul className="nav__list">{generateTitleLinks()}</ul>
    </nav>
  );
};

export default Nav;
