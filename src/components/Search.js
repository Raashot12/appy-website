import React from 'react';

function Search() {
	return (
		<section className="subscribe-area">
			<div className="mistura">
				<h3 className="blue-color">Subscribe for More Features</h3>
				<form>
		<input type="email" className="control" placeholder="Enter your email" required="required" id="mc-email" name="EMAIL"></input>
					<button className="bttn-white-active" type="submit"><span class="lnr lnr-location"></span> Subscribe</button>
				</form>
			</div>
		</section>
	)
}
export default Search;