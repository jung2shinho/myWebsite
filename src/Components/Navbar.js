// Use Link instead of <a> since Link does not send request to server side, thus, faster loading.
import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";

import * as RxIcons from "react-icons/rx"
import SidebarMenu from "./SidebarMenu";

function Navbar() {
   // React Hook for clicking burger menu
   const [status, setStatus]= useState(false) // initial value
   
   const menuClick = () => {
      setStatus(status => !status) // switches value between true and false
      console.log(status)
   }

   return (
      <div className="navbar">
         <Link to ="/" className="site-title">
               SHINHO JUNG
         </Link>
         
         { MenuData.map( (item, index) => {
               if (item.target === '_blank') {
                  return (
                     <li key={index} className="nav-text">
                        <a href ={item.path}>
                           {item.icon}
                           <span> {item.title} </span>
                        </a>
                     </li>
                  )
               } else {
                  return (
                     <li key={index} className="nav-text">
                        <Link to ={item.path}>
                           {item.icon}
                           <span> {item.title} </span>
                        </Link>
                     </li>
                  )
               }
             })
            }
         <RxIcons.RxHamburgerMenu onClick={menuClick} className="burger" />
         <SidebarMenu status={status} onClick={menuClick} />
      </div>
   )
}

export default Navbar