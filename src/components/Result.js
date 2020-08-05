import React from 'react';

function Result() {
	return (
		<section className='am'>
		<div className="in">
				<h5>_________Pricing Plan__________</h5>
				<h3 class="dark-color">Our Awesome Pricing Plan</h3><br></br><br></br>
		</div>
		<div className="iskilu">
			<div className="parent">
				<div className="card1">
				<button className="bbb">
						<i class="fa fa-rocket" aria-hidden="true"></i><br></br>Free
				</button><br></br><br></br>
				<p className='listed'>
						<li>Easy Installations</li>
						<li>Unlimited support</li>
						<li>Uniqe Elements</li>
				</p>
				<br></br>
				<p className="price-rate">
					<sup>$</sup>
					<span>49</span>
					<small>Month</small>
				</p><br></br>
				<button className="bbb2">Purchase</button>
				</div>
			</div>
			<div className="parent">
				<div className="card1">
					<button className="bbb">
						<i class="fa fa-rocket" aria-hidden="true"></i><br></br>Medium
				</button><br></br><br></br>
					<p className='listed'>
						<li>Easy Installations</li>
						<li>Unlimited support</li>
						<li>Uniqe Elements</li>
					</p>
					<br></br>
					<p className="price-rate">
						<sup>$</sup>
						<span>49</span>
						<small>Month</small>
					</p><br></br>
					<button className="bbb2">Purchase</button>
				</div>
			</div>
				<div className="parent">
					<div className="card1">
						<button className="bbb">
							<i class="fa fa-rocket" aria-hidden="true"></i><br></br>Business
				</button><br></br><br></br>
						<p className='listed'>
							<li>Easy Installations</li>
							<li>Unlimited support</li>
							<li>Uniqe Elements</li>
						</p>
						<br></br>
						<p className="price-rate">
							<sup>$</sup>
							<span>49</span>
							<small>Month</small>
						</p><br></br>
						<button className="bbb2">Purchase</button>
					</div>
				</div>
			</div>
		</section>

	)
}
export default Result;