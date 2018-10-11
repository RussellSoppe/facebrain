import React from 'react';

const FaceRecognition = (props) => {
	return(
			<div className='center'>
				<div className='facePic'>
					<img 
						id='inputimage'
						alt='' 
						src = {props.imageUrl}
						width='400px'
						height='auto'
					/>
					<div 
						className='bounding-box'
						style={{top: props.box.topRow, 
							right: props.box.rightCol, 
							bottom: props.box.bottomRow, 
							left: props.box.leftCol}}
					>
					</div>
				</div>
			</div>
		);
}
export default FaceRecognition;


						