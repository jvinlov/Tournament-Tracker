import React, { Component } from 'react';
import { Form, Button, Label, Segment, Grid, Header, Icon, Checkbox, Image  }from 'semantic-ui-react';
import pbIcon from '../pickIcon.png'
class CreateTourney extends Component {
	constructor(){
		super();

		this.state = {
			name: '',
			date: '',
			location: '',
			usapa: false

		}
	}

	handleChange = (e) => {
		console.log(e.currentTarget)
		if (e.currentTarget.children.length>0){
			if (e.currentTarget.children[0].name === "usapa"){
			if(this.state.usapa === false){
				this.setState({
					usapa : true
				})
			} else {
				this.setState({
					usapa : false
				})
			}
		}
		}  else {
			this.setState({[e.currentTarget.name]: e.currentTarget.value})
		console.log(this.state, e.currentTarget.name )
		}
		
		
	}

	handleSubmit = (e) => {
		console.log(this.state)
		this.props.addTourney(e, this.state);
		this.setState({
			name: '',
			date: '',
			location: '',
			usapa: ''
		})
	}

	render (){
		return (
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
			<Header as='h2' color='yellow' textAlign='center'>
			        <Image src={pbIcon} /> Create New Tournament
			</Header>
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
				  	<label>Name</label>
				  	<input 
				  		name="name"
				  		placeholder='Tourney Name'
				  		onChange={this.handleChange} />
				</Form.Field>

				<Form.Field>
				  	<label>Date</label>
				  	<input 
				  		name="date"
				  		placeholder='Date'
				  		onChange={this.handleChange} />
				</Form.Field>

				<Form.Field>
					<label>Location</label>
					<input 
						name="location"
						placeholder='Location'
						onChange={this.handleChange} />
				</Form.Field>

				<Form.Field>
				  <Checkbox name="usapa" label='USAPA Sanctioned?'
				  			onChange={this.handleChange} />
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>

			</Grid.Column>
  		</Grid>


			)
	}

}

export default CreateTourney;
