import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
// import About from './componentss/About';
import Features from "./componentss/Features";
import Gallery from './componentss/Gallery';
import Pricing from "./componentss/Pricing"
import Subscriber from "./componentss/Subscriber" 
import School from "./componentss/School" 
import Home from "./Home"
import logo from "./components/logo.png"
import Third from './componentss/Third';



export default function Routers(){
return(
	<section>
		
		<Router>
			<Nav />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path='/Third' component={Third} />
				<Route path='/Features' component={Features} />
				<Route path='/Gallery' component={Gallery} />
				<Route path='/Pricing' component={Pricing} />
				<Route path='/School' component={School} exact />
				<Route path='/Subscriber' component={Subscriber} exact />
				
			</Switch>
		</Router>
	</section>
)
}

 function Nav() {
	return (
		<section className="logo">
			<div className="navpane">
				<img className="img1" src={logo} alt="logo" />
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/Third">About</Link></li>
						<li><Link to="/Features">Features</Link></li>
						<li><Link to="/Gallery">Gallery</Link></li>
						<li><Link to="/Pricing">Pricing</Link></li>
						<li><Link to="School">Blog</Link></li>						
						<li>FAQ</li>
						<li><Link to="/Subscriber">Contacts</Link></li>
					</ul>
				</nav> 
			</div>
			<div>
				< button className="up"> SIGN UP</button>
			</div>
		</section>
	)
}