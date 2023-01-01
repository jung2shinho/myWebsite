import React from 'react';

import Navbar from "./Navbar";
import Footer from "./Footer";

import "../css/Layout.css"

const Layout = ( {children} ) => {
    return(
      <div className="page-container">
        <Navbar />
        <main>{children}</main>
      </div>
    )
}

export default Layout;