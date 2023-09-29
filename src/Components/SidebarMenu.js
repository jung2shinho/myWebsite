import React, {useEffect} from "react";
import "../css/Sidebar.css";
import * as RxIcons from "react-icons/rx";
import { MenuData } from "./MenuData";
import { Link } from "react-router-dom";

function SidebarMenu(props) {
   useEffect(() => {
      // Add a click event listener to the document
      const handleClick = (event) => {
        console.log("Click detected at X:", event.clientX, "Y:", event.clientY);
      };
  
      document.addEventListener("click", handleClick);
  
      // Cleanup: Remove the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, []);

   if (props.status === true ) {
      return (
         <div className="mobile-menu">
            <h1> MENU
               <RxIcons.RxExit onClick={props.onClick} className="exit"/> </h1>
            { MenuData.map( (item, index) => {
               if (item.target === '_blank') {
                  return (
                     <li key={index} className="mobile-menu-text">
                        <a href ={item.path}>
                           {item.icon}
                           <span> {item.title} </span>
                        </a>
                     </li>
                  )
               } else {
                  return (
                     <li key={index} className="mobile-menu-text">
                        <Link to ={item.path}>
                           {item.icon}
                           <span> {item.title} </span>
                        </Link>
                     </li>
                  )
               }
             })
            }
         </div>
      )
   }
}


export default SidebarMenu