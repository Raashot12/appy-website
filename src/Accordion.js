import React, { Component } from 'react';


class Accordion extends Component {

	state= {
		ShowInfo:false
	}

 handleToggle=()=>{
	
	 this.setState({
		 showInfo:!this.state.showInfo
	 })

 }



	render(props) {
		return (
			<div className="single_accordion">
				<div className='tab' onClick={this.handleToggle}>
					<i className= {this.state.showInfo ?"fa fa-minus" : "fa fa-plus"} aria-hidden="true" onClick={this.handleToggle}></i><p>{this.props.title}</p>
				</div>
				<div className={this.state.showInfo ? 'showContent content' : 'content'}>
					<p>
					{this.props.texts}
					</p>
				</div>
			</div>
		);

	}

}
export default Accordion;