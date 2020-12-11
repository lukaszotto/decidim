import React from "react";
import Nav from "./Nav";

import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Nav></Nav>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
