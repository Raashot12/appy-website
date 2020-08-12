import React from 'react';
import logo2 from "../components/logo2.png"
function Place() {
	return (
		<section className="face">
      	<img className="img2" src={logo2} alt="logo" />
			<div className="wow">
       			<h1>Start your amazing <br></br>stuff through appy.</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod<br></br> tempor 
         		incididunt ut labore et laborused sed do eiusmod tempor incididunt<br></br>  ut labore et laborused.</p><br></br>
				<button><i class="fa fa-download" aria-hidden="true"></i>
					Download App</button>
			</div>
		</section>
	)
}
export default Place;