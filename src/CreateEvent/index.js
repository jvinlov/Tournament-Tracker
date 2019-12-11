import React, { Component } from 'react';
import { Form, Button, Label, Segment, Grid, Header, Icon, Image } from 'semantic-ui-react';
import MenuBar from '../Menu'
import pbIcon from '../pickIcon.png';

class CreateEvent extends Component {
	constructor(){
		super();

		this.state = {
			category: '',
			level: '',
			partner: '',
			results: '',
			tourney: ''
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
			results: '',
			
		})
	}

	componentDidMount() {
		this.setState({
			tourney: this.props.tourneyId
		})
		
	}

	render (){
		return (

			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
		
					<Header as='h2' color='yellow' textAlign='center'>
					        <Image src={pbIcon} /> Enter Event 
					</Header>
					<Form onSubmit={this.handleSubmit}>
					
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
								onChange={this.handleChange} />
							</Form.Field>
							<Button type='submit'>Submit</Button>
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>






			)
	}
}

export default CreateEvent;