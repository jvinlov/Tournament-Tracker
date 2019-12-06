import React from 'react';
import {Modal, Form, Button, Label, Header }from 'semantic-ui-react'

const EditTourneyModal = (props) => {
	console.log(props)
		return (
			<Modal open={props.open}>
				<Header>Edit Tourney</Header>
				<Modal.Content>
					<Form onSubmit={props.closeAndEdit}>
						<Label>Tourney</Label>
						<Form.Input type='text' name='name' value={props.tourneyToEdit.name} onChange={props.handleEditChange}/>
					</Form>
				</Modal.Content>
			</Modal>
			)

}

export default EditTourneyModal;
