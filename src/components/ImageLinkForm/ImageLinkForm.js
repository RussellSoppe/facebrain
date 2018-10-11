import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
	return (
		<div className='imagelinkform'>
			<p className='imagelinktext'>This magic brain will detect faces in your picture.</p>
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
