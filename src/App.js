import React from 'react';
import './App.css';
import { Image } from 'semantic-ui-react'
import Register from './Register';
import Login from './Login';
import TourneyContainer from './TourneyContainer';
// import HeaderComponent from './HeaderComponent';
// import CreateIssue from './CreateIssueForm'; //I do not think we can do this.
import { Route, Switch } from 'react-router-dom';
import Pickleball from'./PickleballOnLine.png';


const My404 = () => {
	return (
		<div>
			<h3>You are lost.</h3>
		</div>
	)
};

function App() {
  return (
  
  		<div>
  			<Switch>
          		<Route exact path="/" component= { Login }/>
	    		<Route exact path="/register" component={ Register }/>
	    		{/*<Route exact path="/" component={ Login } />*/}
          		<Route exact path="/login" component= { Login } />
	    		<Route exact path="/tourneys" component={ TourneyContainer } />
	    		{/*<Route exact path="/create_issue" ={ CreateIssue } />I do not think we can do this*/}
	    		<Route component={ My404 } />
	 		</Switch> 

		</div>
	
    )
}

export default App;
