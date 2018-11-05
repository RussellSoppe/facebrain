import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';


const initialState = {
  input:'',
  imageUrl:'',
  box: {},
  route: 'SignOut',
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super ();
    this.state=initialState;
  }

  // Test function to pass in input field if and when needed
  /*  formIsWorking = (event) => {console.log(event.target.value);}*/
// componentDidMount(){
//   fetch('http://localhost:3000')
//     .then(response => response.json())
//     // data automatically gets dumped in, can just use console.log without the data and arrow function .then(data => console.log(data))
//     .then(console.log)
// }


  loadUser = (data) => {
    this.setState(
      {user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        entries: data.entries,
        joined: data.joined
      }}
    )
  }

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
    // app.models
    // .predict(
    //   Clarifai.FACE_DETECT_MODEL, 
    //   this.state.input
    // )
    fetch('https://immense-journey-57497.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then (response => response.json())
    .then(response => {
      if(response) {
        fetch('https://immense-journey-57497.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count =>{
         //needs Object.assign not altering state
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
        .catch(console.log)
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    }) 
    .catch(error => console.log(error));
  }

  onRouteChange = (route)=>{
    if (route === "SignOut"){
      this.setState(initialState)
    }
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
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
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
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
            </div>
            :<div>
                <div className='head'>
                  <div className='logo'>
                    <Logo/>
                  </div>     
                </div>
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
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