import React, { useState } from "react";
import "../css/Footer.css"
import * as AiIcons from "react-icons/ai"
import { supabase } from "../supabaseClient";
import Popup from "./Popup";

export default function Footer() {
	// React Hooks for subscribing email and popup
	const [email, setEmail] = useState("")
	const [isOpen, setIsOpen] = useState(false)
	const [errorMsg, setErrorMsg] = useState("")

	// Validates email format
	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	}

	// Reflects input into the hook state
	const handleChange = e => {
		setEmail(e.target.value)
		setErrorMsg("")
	}

	// onClick posts data onto database
	const subscribeEmail = async () => {
		if (!email.trim()) {
			setErrorMsg("Please enter an email address")
			return
		}

		if (!isValidEmail(email)) {
			setErrorMsg("Please enter a valid email address")
			return
		}

		const { data, error } = await supabase
			.from('subscribers')
			.insert([{ email }]);

		if (error) {
			console.error('Error subscribing:', error.message);
			setErrorMsg("Something went wrong. Please try again.")
		} else {
			console.log('Subscribed:', data);
			setIsOpen(true);
			setEmail('');
		}
	}

	return (
		<div className="footer">
			<div className="container1">
				<div className="contact"> 
				<h2> CONTACT </h2>
					<ul className="contact-icons">
						<li><AiIcons.AiOutlineMail />
							Email </li>
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
					
					<input type="email" className="email-list"
						value={email} onChange={handleChange}
						placeholder="your@email.com" />
					{errorMsg && <p className="error-msg">{errorMsg}</p>}
					<br />
					
					<button type="button" onClick={subscribeEmail}>
						Subscribe
					</button>
					{isOpen && (
						<Popup
							content={<p>Thank you for subscribing!</p>}
							onClose={() => setIsOpen(false)}
						/>
					)}
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