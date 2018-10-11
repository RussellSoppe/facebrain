import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
	return (
		<nav className='signNav'>
			<p 
			onClick={() => props.onRouteChange('SignOut')}
			className='sign'>Sign Out</p>
		</nav>
	);
}
export default Navigation;