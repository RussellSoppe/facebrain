import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
	return (
		<div className='imagelinkform'>
			<p className='imagelinktext white bg-blue f2'>This magic brain will detect faces in your picture.</p>
			<p className='imagelinktext white bg-blue f2'>Copy and Paste an img url into the input below and press the detect button!</p>
			<div className='center'>
				<div>
					<input className='imagelinkinput'type='text' onChange={props.onInputChange}/>
					<button className='imagelinkbutton' onClick={()=>props.onButtonSubmit()}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
