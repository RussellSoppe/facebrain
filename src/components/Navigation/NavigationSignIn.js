import React from 'react';
import './Navigation.css';

const NavigationSignIn = (props) => {
	return (
		<div>
      <input 
        onClick={() => props.onRouteChange('SignOut')}
        className="flex justify-between b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Sign In"/>
    	</div>
	);
}
export default NavigationSignIn;