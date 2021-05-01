import React from "react";
import NavSubMenu from "../NavSubMenu";
import { navCatagories } from "../testData.json";

import "./Nav.scss";

const generateTitleLinks = () => {
  return navCatagories.map(
    ({ url_path, children_data, custom_dropdown_link, fredhopper_id }) => {
      const key = fredhopper_id;
      const navLink = children_data[0]
        ? children_data[0].url_path
        : custom_dropdown_link;

      return (
        <a key={key} className="nav__title" href={navLink} title={url_path}>
          {url_path}
          <NavSubMenu childrenData={children_data} />
        </a>
      );
    }
  );
};

const Nav = (props) => {
  return <nav className="nav">{generateTitleLinks()}</nav>;
};

export default Nav;
