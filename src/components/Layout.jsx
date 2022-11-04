import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="Layout">
      <Header setOpen={setOpen} open={open} />
      <div className="Middle">
        <NavBar open={open} />
        <div className="Main">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
