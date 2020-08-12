import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import About from './componentss/About';
import Features from "./componentss/Features";
import Gallery from './componentss/Gallery';
import Pricing from "./componentss/Pricing";
import Subscriber from "./componentss/Subscriber";
import School from "./componentss/School";
import Home from "./Home";
import logo from "./components/logo.png";
import Third from './componentss/Third';
import Build from "./componentss/Build";
// import Navigatesignup from './componentss/Navigatesignup';
import Signup from "./componentss/Signup";



export default function Routers() {
	return (
		<section>

			<Router>
				<Nav />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path='/Third' component={Third} exact />
					<Route path='/Features' component={Features} exact />
					<Route path='/Gallery' component={Gallery} exact />
					<Route path='/Pricing' component={Pricing} exact />
					<Route path='/School' component={School} exact />
					<Route path='/Build' component={Build} exact />
					<Route path='/Subscriber' component={Subscriber} exact />
					<Route path="/Home" component={logo} exact />
					<Route path="/Signup" component={Signup} exact/>
				</Switch>
			</Router>
		</section>
	)
}

function Nav() {

return (

	<section className="logo">
		<div className="navpane">
			<Link to="/"><img className="img1" src={logo} alt="logo" /></Link>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/Third">About</Link></li>
					<li><Link to="/Features">Features</Link></li>
					<li><Link to="/Gallery">Gallery</Link></li>
					<li><Link to="/Pricing">Pricing</Link></li>
					<li><Link to="/School">Blog</Link></li>
					<li><Link to="Build">FAQ</Link></li>
					<li><Link to="/Subscriber">Contacts</Link></li>
				</ul>
			</nav>
		</div>
		<div>
			<Link to="/Signup"><button type="button" className="up">SIGN UP</button></Link>
		</div>
	</section>
)
}