import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
	return (
		<nav className='signNav'>
			<p 
			onClick={() => props.onRouteChange('SignOut')}
			className='b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib'>Sign Out</p>
		</nav>
	);
}
export default Navigation;