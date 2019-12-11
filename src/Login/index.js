import React, { Component } from 'react';
import { Form, Label, Button, Message, Grid, Header, Image, Icon, List, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import pbIcon from '../pickIcon.png';
import MenuBar from '../Menu';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const loginUrl = `${process.env.REACT_APP_API_URL}/api/v1/users/login`;

		const loginResponse = await fetch(loginUrl, {
			method: 'POST', 
			body: JSON.stringify(this.state),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const parsedResponse = await loginResponse.json();
		const currentUser = parsedResponse.data
		console.log(currentUser,'after return from login post')
		if (parsedResponse.status.code === 200) {
			console.log('Login successful');
			this.setState({currentUser: currentUser})

			this.props.history.push('/tourneys');
		} else {
			this.setState({
				errorMsg: parsedResponse.status.message
			});
		}
	}
	
	render (){
		return (
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			    <Grid.Column style={{ maxWidth: 450 }}>
			    <MenuBar/>
			      <Header as='h2' color='teal' textAlign='center'>
			        <Image src={pbIcon}/> Tournament Tracker
			      </Header>
			      <Form size="large" onSubmit={this.handleSubmit}>
			        <Segment stacked>
			          <Form.Input 
			          	fluid 
			          	icon="user"
			          	iconPosition="left"
			          	placeholder="E-mail address" 
			          	type="email" 
			          	name="email" 
			          	onChange={this.handleChange} 
			          	required 
			          />
			          <Form.Input
			            fluid
			            icon="lock"
			            iconPosition="left"
			            placeholder="Password"
			            type="password" 
			            name="password" 
			            onChange={this.handleChange} 
			            required
			          />

			          <Button color="teal" fluid size="large" type="submit">
			            Login
			          </Button>
			        </Segment>
			      { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null }
			      </Form>
			      <Message>
			        {/*New to us? <a href='#'>Sign Up</a>*/}
			        New to us?
			        <List>
						<List.Item><Link to = '/register'>Sign Up</Link></List.Item>
					</List>
			      </Message>
			    </Grid.Column>
  			</Grid>
			)
	}


}

export default Login;
