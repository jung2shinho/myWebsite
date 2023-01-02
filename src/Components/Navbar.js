// Use Link instead of <a> since Link does not send request to server side, thus, faster loading.
import React, { useState } from "react";
import "../css/Navbar.css"
import { Link } from "react-router-dom"
import { MenuData } from "./MenuData"
import SidebarMenu from "./SidebarMenu";
import * as BiIcons from "react-icons/bi"
import * as RxIcons from "react-icons/rx"

function Navbar() {
   // React Hook for clicking burger menu
   const [status, setStatus]= useState(true) // initial value
   
   const menuClick = () => {
      setStatus(!status) // switches value between true and false
      console.log(status)
      if (status == true) {
         <SidebarMenu />
      } else {}
   }

   return (
      <div className="navbar">
         <Link to ="/" className="site-title">
               <BiIcons.BiCode />
               SEAN JUNG
         </Link>
         { MenuData.map( (item, index) => {
               return (
                  <li key={index} className={item.cName}>
                     <Link to={item.path} target={item.target}>
                           {item.icon}
                           <span> {item.title} </span>
                     </Link>
                  </li>
               )
         })}
         <RxIcons.RxHamburgerMenu onClick={menuClick} className="burger" />
      </div>
   )
}

export default Navbar