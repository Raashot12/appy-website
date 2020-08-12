import React from 'react';
import { useHistory } from "react-router-dom";


function Navigatesignup() {
  const history = useHistory();
	const navigateTo = () => history.push('/https://www.belatrixsf.com/blog/facial-recognition');//eg.history.push('/login');

  return (
   <div>
		  <button onClick={navigateTo} type="button" className="up">SIGN UP </button>
   </div>
  );
}
export default Navigatesignup;