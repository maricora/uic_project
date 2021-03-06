import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import App from '../App';
import './css/styles.css';
import logo from './img/capricorn.png';

export default class LogOutPage extends Component {    
	
	doLogout = () => {
			localStorage.setItem("loggedIn", "");		
		}		
		
	render() {	
		this.doLogout();
	
		return (

			<div className="page-wrapper">
				<Helmet>
					<meta charset="utf-8"/>
					<title>Log Out</title>
					<meta name="description" content="Log Out to the Translator" />
					<meta name="author" content="Team Translator" />			
				</Helmet>
				
				<div id="page-logout" class="page">
					<div id="content" class="login-signup">
						<div class="form-top">
							<img src={logo} alt="Translator logo" class="logo-form" />
							<h1>Translator</h1>
						</div>
						<div id="logout-info">
							<p>You have logged out.</p>
							<p>We hope to see you soon!</p>
                            <p>Back to <a href="/" title="To Login">Login</a></p>
						</div>
					</div>
				</div>
			</div>

		);
	}
}