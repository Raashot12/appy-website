 import React from 'react'
import Place from "./components/Place.js"
import Third from "./components/Third.js";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth.js";
import Sixth from "./components/Sixth.js";
import Testimonials from "./Testimonials";
import Management from "./components/Management.js";
import School from "./components/School.js";
import University from "./components/University.js";
import Result from "./components/Result.js";
import Search from "./components/Search.js";
import Subscriber from "./components/Subscriber.js";
import Scalability from "./components/Scalability.js";
	

function Home() {
	return (
		<div>
	<Place />
	<Third />
	<Fourth />
	<Fifth />
	<Sixth />
	<Testimonials />
	<Management />
	<School />
	<University />
	<Result />
	<Search />
	<Subscriber />
	<Scalability />
		</div>
	)

}

export default Home;
