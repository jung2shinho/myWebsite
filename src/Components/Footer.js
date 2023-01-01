import React from "react";
import "../css/Footer.css"
import * as AiIcons from "react-icons/ai"

export default function Footer() {
	return (
		<div className="footer">
			<div className="container container1">
					<div className="row1 col1">
						<ul> 
							<li><h4>Contact Info</h4></li>
							<li>Email</li>
							<li>Phone</li>
							<li>Messenger</li>
						</ul>
					</div>
					<div className="row1 col2">
						<ul> 
							<li> <h4>© 2023 Sean Jung </h4> </li>
							<li> Email: jung2shinho@gmail.com </li>
						</ul>
					</div>
					<div className="row1 col3">
						<ul> 
							<li> <h4>Support </h4> </li>
							<li> <AiIcons.AiOutlinePayCircle /> </li>
						</ul>
					</div>
			</div>
			<div className="container container2">
				<div className="icons"> 
					<AiIcons.AiOutlineBook/>
					<AiIcons.AiOutlineFacebook />
					<AiIcons.AiOutlineInstagram />
					<AiIcons.AiOutlineTwitter />
					<AiIcons.AiOutlineContacts />
				</div>
				<div className="rights">
				   | © 2023 Sean Jung LLC | All Rights Reserved | Privacy |
				</div>
			</div>
		</div>
    )
};