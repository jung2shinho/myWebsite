import React from "react";
import "../css/Pages.css";

export default function Projects() {
    return (
		<div className="pages">
			<h1> Personal Coding Projects </h1>
			<ul>
				<li> <h2> HOME PRICE PREDICTOR | ZILLOW | MACHINE LEARNING </h2>
				 </li>
				 	<a href="https://github.com/jung2shinho/ML_HomePrices">
						github repo </a>   
					<a href="/">/ app</a>
					<p> Estimates the property value based on historical Zillow dataset (e.g square footage, lot size, # of rooms, bathrooms). Structured under Django framework with AWS Elastic Beanstalk to support its backend. Utilizes sklearn's regression models. </p>
				<li> <h2> IMAGE CLASSIFICATION | COMPUTER VISION | DEEP LEARNING </h2> </li> 
					<a href="https://github.com/jung2shinho/ML_ImageClassification">
						github repo </a>   
					<p> A multi-layered neural network model using PyTorch library to accurately detect and label 60,000 images within the CIFAR-10 dataset, reaching a +70% test accuracy within 9 epoch training cycles. </p>
				<li> <h2> LOAN VIABILITY | LENDING CLUB | MACHINE LEARNING </h2> </li>
					<a href="https://github.com/jung2shinho/ML_Loan_Approvals">
						github repo </a>   
				 	<p> A decision tree classifier using scikit-learn to determine bank approvals for 1412 Lending Club loan applications, based an individual’s loan amount, credit score, delinquency history, and 7 other features. </p>
				<li> <h2> FOOD PRODUCT REVIEWS | AMAZON | MACHINE LEARNING </h2> </li>
					<a href="https://github.com/jung2shinho/ML_Food_Reviews">
						github repo </a>   
					<p> Created a logistics regression model using scikit-learn and seaborn to quantify and categorize the emotional sentiment of 1251 Amazon product reviews for evaluating the success of a given Amazon product. </p>
				<li> <h2> AUTOMATED PET FOOD DISPENSER | FREERTOS | EMBEDDED SYSTEMS </h2> </li>
					<a href="https://github.com/jung2shinho/EE_AutomatedPetFood">
						github repo </a>   
					<p> Created a 3D design and product development for an Automated Pet Food Dispenser that resulted in a functional prototype with RFID sensors, Arduino microcontrollers, and UI – programmed using FreeRTOS in C language. </p>
				<li> <h2> (this) PORTFOLIO WEBSITE | REACT | THREE.js </h2> </li>
					<a href="/">Home Page</a>
					<p> React Framework with HTML, CSS, Javascript. // 3D animation created using Blender and Three.js // Hosted via Github Pages with Google Domain. </p>
			</ul>
		</div>
  );
};