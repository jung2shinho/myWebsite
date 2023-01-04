import React from "react";
import "../css/Sidebar.css";
import * as RxIcons from "react-icons/rx";
import { MenuData } from "./MenuData";
import { Link } from "react-router-dom";

function SidebarMenu(props) {
   if (props.status === true ) {
      return (
         <div className="mobile-menu">
            <h1> MENU <RxIcons.RxExit onClick={props.onClick} /> </h1>
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
         </div>
      )
   }
}


export default SidebarMenu