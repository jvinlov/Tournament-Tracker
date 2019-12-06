import React, { Component } from 'react';
import { Form, Button, Label, Segment, Grid, Header, Icon } from 'semantic-ui-react';
import MenuBar from '../Menu'

class CreateEvent extends Component {
	constructor(){
		super();

		this.state = {
			category: '',
			level: '',
			partner: '',
			results: ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}

	handleSubmit = (e) => {
		this.props.addEvent(e, this.state);
		this.setState({
			category:'',
			level: '',
			partner: '',
			results: ''

		})
	}

	render (){
		return (
			<Form onSubmit={this.handleSubmit}>
			<MenuBar/>
				<Segment stacked>
					<Form.Field>
				  	<label>Category</label>
				  	<input 
				  		name='category'
				  		placeholder='MD, WD, or MXD'
				  		onChange={this.handleChange} />
					</Form.Field>

					<Form.Field>
				  	<label>Level</label>
				  	<input 
				  		name="level"
				  		placeholder='ex. 3.5, 4.5'
				  		onChange={this.handleChange} />
					</Form.Field>

					<Form.Field>
				  	<label>Partner</label>
				  	<input 
				  		name="partner"
				  		placeholder='Partner Name'
				  		onChange={this.handleChange} />
					</Form.Field>
					<Form.Field>
					<label>Results</label>
					<input 
						name='results'
						placeholder='Gold, Silver, Bronze, or No Medal'
						onchange={this.handleChange} />
					</Form.Field>
					
				</Segment>
			</Form>






			)
	}
}