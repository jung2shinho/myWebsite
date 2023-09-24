import React from "react";
import "../css/Pages.css";

export default function Projects() {
    return (
		<div className="pages">
			<h1> Coding Projects </h1>
			<ul>
				<li> <h2> Real Estate Estimator App</h2>
				 </li>
				 	<a href="https://github.com/jung2shinho/ML_HomePrices">
						github repo</a>/   
					<a href="/">app</a>
					<p> Estimates the property value and potential renovation costs through visual input (photos) of property, general market construction costs, and various  public data. </p>
				<li> <h2> Stock Market Estimator App </h2></li>
					<p> An automated Trading Bot that uses a linear regression model that utilizes basic algorithms to predict future stock market movements and trends. </p>
				<li> <h2> Robinhood Tax Estimator App </h2> </li>
					<p> Calculates current and projected dividends as well as stock earnings in assisting user on tracking income for accurately estimating tax liability. </p>
				<li> <h2> Number Recognition </h2> </li>
					<p> Utilizes multi-layered neural network to recognize numbers upon freehand input. </p>
				<li> <h2> <a href="/"> This Personal Website </a>  </h2> </li>
					<p> Uses HTML / CSS / Javascript to consolidates work of a true professional in one single-page application. Made with React Framework. Hosted via Google Domain. </p>
			</ul>
		</div>
  );
};