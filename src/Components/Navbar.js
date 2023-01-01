// Use Link instead of <a> since Link does not send request to server side, thus, faster loading.
import "../css/Navbar.css"
import { Link } from "react-router-dom"
import { SidebarData } from "./SidebarData"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to ="/" className="site-title">
                Sean Jung
            </Link>

            { SidebarData.map( (item, index) => {
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