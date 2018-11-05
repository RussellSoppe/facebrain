import React from 'react';

class SignIn extends React.Component {  

	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event)=> {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event)=> {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = ()=> {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		}) 
			.then(response => response.json())
			.then(user =>{
				if(user.id){
					this.props.loadUser(user);
					this.props.onRouteChange('SignedIn');
				}
			})
	}

	render () {
			return(
			<article className="br3 ba white mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
				<main className="pa4 black-80">
			  	<div className="measure">
					   <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f1 white fw6 ph0 mh0">Sign In</legend>
						      <div className="mt3">
						        <label className="db white fw6 lh-copy f6" htmlFor="email-address">Email</label>
						        <input onChange={this.onEmailChange} className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
						      </div>
						      <div className="mv3">
						        <label className="db white fw6 lh-copy f6" htmlFor="password">Password</label>
						        <input onChange={this.onPasswordChange} className="b white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
						      </div>
					      	{/*<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>*/}
					   </fieldset>
		    		<div className="">
		      		<input 
		      			onClick={this.onSubmitSignIn}
		      			className="b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
		      			type="submit" 
		      			value="Sign in"/>
		    		</div>
				    <div className="lh-copy mt3">
				      <p 
				      onClick={() => this.props.onRouteChange('Register')}
				      className="f6 white link dim black pointer db">Register</p>
				      {/*<a href="#0" className="f6 link dim black db">Forgot your password?</a>*/}
				    </div>
			  	</div>
				</main>
			</article>
			);
	}}



export default SignIn;