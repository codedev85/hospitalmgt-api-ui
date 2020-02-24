import React , { Component } from 'react';
import Navigation from './Navigation/Navigation';
import Panel from './Panel/Panel';
import Logo from './Logo/Logo';
import PatientList from './PatientList/PatientList';
import Signin from './Signin/Signin';
import Register from './Register/Register';
import Particles from 'react-particles-js';
import './App.css';


const particlesoptions = {
	         particles: {
            			number:{
            				value:300,
            				density:{
            					enable:true,
            					value_area:800,
            				},
            				interactivity:{
            					onhover:{
            						enable: true,
            					},
            				}


            			}
            		}
                 }

class App extends Component{
constructor(){
	super();
	this.state={
		route:'signin',
		isSignedIn: false,
		// username:'',
		// password:'',
	}

}
onRouteChange = (route) =>{

	if(route === 'signout'){

		this.setState({isSignedIn:false})

	}else if(route === 'home'){

		this.setState({isSignedIn: true})
	}
		
	this.setState({route: route});	
}



			            
	render(){
		return <div className="App">
					<Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
					<Particles className="particles" params={particlesoptions}/>
					{
					 ( 
					 this.state.route === 'home'
					 ? <div>
						    <Logo />
							<Panel />
							<PatientList />
					   </div>
					: this.state.route === 'signin'
					? <Signin 
					    onRouteChange={this.onRouteChange}/>  	
                    : this.state.route === 'register' 
                    ? <Register onRouteChange={this.onRouteChange}/> 
                    : 'working'

                    )
                  
                    
						
				  }
		      </div>;
	}
}

export default App;
