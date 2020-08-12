import React from 'react';
import './Features.css';


const Testimony = (item)=> {
	return (
		<div className="row">
			<div className="col-md-4 text-center">
				<div className="profile">
					<img src={item.img} alt="" className="user" />
					<h3>
						Ashekur Rahman <br /> <span className="testspan">Art Directors</span>
					</h3>
					<blockquote>
						Lorem ipsum dolor sit amet, consectetur adipiing elit, labore et laborused sed do eiusmod tempo
                        </blockquote>
				</div>
			</div>
		</div>
	);
};
export default Testimony;