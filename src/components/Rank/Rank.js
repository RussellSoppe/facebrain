import React from 'react';
import './Rank.css';

const Rank = (props) => {
	return (
		<div>
			<div className='ranktext f2'>
				{`${props.name} your current # of entries is: `}
			</div>
			<div className='rank f2 white'>
				{props.entries}
			</div>
		</div>
	);
}

//react tilt
//npm install --save react-tilt

export default Rank;