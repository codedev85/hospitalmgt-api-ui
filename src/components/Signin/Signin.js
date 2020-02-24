import React , { Component } from 'react';
import {PostData} from '../../Services/PostData'
// import React from 'react';
import './Signin.css';

class Signin extends Component {
	constructor(props){
	super(props);
		this.state={
			username:'',
			password:'',
		}
	this.loggedIn = this.loggedIn.bind(this);
	this.onValueChange = this.onValueChange.bind(this);
}
   
   loggedIn(){
	PostData('signin',this.state).then((result)=> {
		
		let responseJSON = result ;
		console.log(responseJSON);
	})

	}

	onValueChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
	}

render() {

	return (

			<article className="br3  mw6 shadow-3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<main className="pa4 black-80">
				  <div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				               type="email" 
				               name="username"  
				               id="email-address" 
				               onChange={this.onValueChange}
				               />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				               type="password" 
				               name="password" 
				               id="password"
				               onChange={this.onValueChange}
				                />
				      </div>
				  
				    </fieldset>
				    <div className="">
				      <input 
				        onClick= {this.loggedIn}
				        // onClick={() => onRouteChange('home')}
				        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				        type="submit" 
				        value="Sign in"
				        />
				    </div>
				    <div className="lh-copy mt3">
				      <a href="#0"  
				       onClick={()=>this.props.onRouteChange('register')}
				       className="f6 link dim black db">Register</a>
				    
				    </div>
				  </div>
				</main>
			</article>
		   )
}

}

export default Signin;