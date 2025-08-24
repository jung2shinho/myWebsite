import React from "react";
import "../css/Footer.css"
import * as AiIcons from "react-icons/ai"
import axios from "axios";
import { useState } from "react";

export default function Footer() {
	// React Hooks for subscribing email and popup
	const [email, setEmail] = useState("")
	const [isOpen, setIsOpen] = useState(false)
	// Reflects input into the hook state
	const handleChange = e => {
		setEmail(e.target.value)
	}
	// onClick posts data onto database 
	const subscribeEmail = () => {
		axios.post('http://localhost:5000/users',{email})
		.then(function (response) {
		  console.log(response);
		})
		.catch(function (error) {
		  console.log(error);
		})
		setIsOpen(!isOpen);
	}

	return (
		<div className="footer">
			<div className="container1">
				<div className="contact"> 
				<h2> CONTACT </h2>
					<ul className="contact-icons">
						<li><AiIcons.AiOutlineMail />
							Email </li>
						<li><AiIcons.AiOutlineFacebook />
							<a href="https://www.facebook.com/jung2shinho">
							Facebook </a> </li>
						<li><AiIcons.AiOutlineInstagram />
							<a href="https://www.instagram.com/jungehof">
							Instagram </a> </li>
						<li><AiIcons.AiOutlineTwitter />
							<a href="https://www.twitter.com/jshinhoxp">
							Twitter </a> </li>
						<li><AiIcons.AiOutlineLinkedin />
							<a href="https://linkedin.com/in/jungshinho">
							LinkedIn </a> </li> 
					</ul>
				</div>
				<div className="subscribe">
					<p> Thank you for visiting my portfolio website!</p>
					<h3> Subscribe to my email newsletter that has the latest updates to my projects and journey! </h3>
					<h3> Email Address </h3>
					
					<input type="text" className="email-list" 
						value={email} onChange={handleChange} /> 
					
					<br />
					
					<button type="button" onClick={subscribeEmail}>
						Subscribe
					</button>
				</div>
			</div>
			<div className="container2"> 
				<div className="rights">
					| © 2025 Sean Jung LLC | All Rights Reserved | Privacy | Terms & Conditions |
				</div>
			</div>
		</div>
    )
};