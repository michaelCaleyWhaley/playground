import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";

import "./App.scss";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Header openMenu={openMenu} />
      <Nav isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default App;
