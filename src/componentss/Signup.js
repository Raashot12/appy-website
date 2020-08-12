import React from 'react';
import vector from "./vector.svg"
import "./style.css"


function Signup() {
	return (
			<section className="boddy">
			<div className="left-column">
			<img className="vec" src={vector} alt="logo" />
			</div>
			<div>
				<form className="loginForm">
					<h1 className="in-in">SIGN UP </h1>
				<span className="larger-width">
						<input type="text" id="user" required size="50" />
						<p>Username</p>
						<label for="password"><i className="fas fa-user"></i></label>
				</span>
					<span>
						<input type="password" id="password" required/>
							<p>Password</p>
						<label for="password"><i className="fas fa-lock"></i></label>
            		</span>
					<button className="btn" type="submit">REGISTER</button>
					<a href="/" className="link">Forget password ?</a><br></br>
					<a href="/" className="link">Create another account?</a>
       		 	</form>
			</div>

			</section>

	)
}
export default Signup;