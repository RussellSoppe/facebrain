import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import brain from './aibrain.png';

const Logo = () => {
	return (
		<div className='logostyle'>
			<Tilt className="Tilt" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
 				<div className="Tilt-inner"><img className='brainlogo' alt='logo'src={brain} height='100' width='100'/></div>
			</Tilt>
		</div>
	);
}

//react tilt
//npm install --save react-tilt
//https://www.npmjs.com/package/react-tilt

export default Logo;