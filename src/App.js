import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';


const app = new Clarifai.App({
 apiKey: '6aa6d95c106a4cf6821ecb8bb05b3945'
});

class App extends Component {
  constructor() {
    super ();
    this.state={
      input:'',
      imageUrl:'',
      box: {},
      route: 'SignOut'
    }
  }

  // Test function to pass in input field if and when needed
  /*  formIsWorking = (event) => {console.log(event.target.value);}*/


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    console.log('clarifaiFace', clarifaiFace);

    return {
      topRow: clarifaiFace.top_row * height,
      leftCol: clarifaiFace.left_col * width,
      bottomRow: height - (clarifaiFace.bottom_row * height),
      rightCol: width - (clarifaiFace.right_col * width)
    }
  }

  displayFaceBox = (box) => {
    console.log('box from displayFaceBox',box);
    this.setState({box:box});
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input
    )
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response))) 
    .catch(error => console.log(error));
  }

  onRouteChange = (route)=>{
    this.setState({route: route});
  }
 

  render() {
    return (
      <div className="App">
       Face Brain
      
      {this.state.route === 'SignedIn'
        ?<div>
            <div className='head'>
              <div className='logo'>
                <Logo/>
              </div>
              <div>
                <Navigation onRouteChange={this.onRouteChange}/>
              </div>         
            </div>
            <Rank/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
          </div>
        :(
           this.state.route === 'SignOut'
            ?<div>
              <div className='head'>
                <div className='logo'>
                  <Logo/>
                </div>     
              </div>
              <SignIn onRouteChange={this.onRouteChange}/> 
            </div>
            :<div>
                <div className='head'>
                  <div className='logo'>
                    <Logo/>
                  </div>     
                </div>
                <Register onRouteChange={this.onRouteChange}/> 
              </div>
          )
        }
      </div>
    );
  }
}



//particles.js???
//google particles react npm
//npm install react-particles-js
export default App;

// <div className="App">
//        Face Brain
//         <div className='head'>
//           <div className='logo'>
//             <Logo/>
//           </div>
//           <div>
//             <Navigation/>
//           </div>         
//         </div>
//       <SignIn />
//       <Rank/>
//       <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
//       <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
//       </div>

 // <div className="App">
 //       Face Brain
 //        <div className='head'>
 //          <div className='logo'>
 //            <Logo/>
 //          </div>
 //          <div>
 //            <Navigation/>
 //          </div>         
 //        </div>