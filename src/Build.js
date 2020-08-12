import React, { Component } from 'react';
import Accordion from "./Accordion";
import './Accord.css';

class  Build extends Component {
	state={data:[
		{	title:'Faq first question goes here?',
			texts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor i reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		},
		{
			title: 'About freewuent question goes here?',
			texts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor i reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		},
		{
			title: 'Why more question goes here?',
			texts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor i reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		},
		{
			title: 'What question goes here?',
			texts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor i reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		}],
	data2:[
		{
			title: 'Faq second question goes here?',
			texts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor i reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		},
		{
			title: 'Third faq question goes here?',
			texts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor i reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		},
		{
			title: 'Why more question goes here?',
			texts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor i reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		},
		{
			title: 'Seventh frequent question here?',
			texts: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor i reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		}],
	}
		// .map((,)=>{}),
		// .filter(() => { }),



	render() {
	const {data, data2}= this.state;
		return (
		<div className="question-area">
			<div className="at-center">
					<h5>________ FAQ _________</h5>
					<h1>Frequently Asked Questions</h1>
			</div>
			<div className="faq-content">
					<div className="fcontent">
						<div className="accordion">

						{data.map(({texts, title}, index)=>{
						return <Accordion  key={index} title={title} texts={texts}/>	
						})}
						</div>

						<div className="accordion2">

						{data2.map(({texts, title}, index) => {
						return <Accordion key={index} title={title} texts={texts} />
						})}
						</div>
			
					</div>		
			</div>
		</div>
		);

	}

}
export default Build;