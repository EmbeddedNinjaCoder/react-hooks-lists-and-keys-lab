import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a href="#home" key={0}>
        {links[0]}
      </a>
      <a href="#about" key={1}>
        {links[1]}
      </a>
      <a href="#projects" key={2}>
        {links[2]}
      </a>
    </nav>
  );
}

export default NavBar;
