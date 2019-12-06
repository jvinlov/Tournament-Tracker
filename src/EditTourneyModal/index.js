import React from 'react';
import {Modal, Form, Button, Label, Header }from 'semantic-ui-react'

const EditTourneyModal = (props) => {
	console.log(props)
		return (
			<Modal open={props.open}>
				<Header>Name: {props.tourney.name}</Header>
				<Modal.Content>
					<Modal.Meta>
						<span>Location: {props.tourney.location}</span>
					</Modal.Meta>
					<Modal.Meta>
						<span>Date: {props.tourney.date}</span>
					</Modal.Meta>
					<Form onSubmit={props.closeAndEdit}>
						<Label>Event</Label>
						<Form.Input type='text' name='category'/>
					</Form>
				</Modal.Content>
			</Modal>
			)

}

export default EditTourneyModal;
