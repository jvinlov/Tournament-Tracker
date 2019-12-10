import React from 'react';
import {Modal, Form, Button, Label, Header, Grid }from 'semantic-ui-react'
import CreateEvent from '../CreateEvent'


const EditTourneyModal = (props) => {
	console.log(props)
		return (
			<Modal open={props.open}>
				<Grid divied='vertical' centered stackable>
					<Grid.Row columns={2}>
						<Grid.Column width={6}>
							<Header>Edit Tourney</Header>
							<Modal.Content>
								<Form onSubmit={props.closeAndEdit}>
									<Label>Tourney</Label>
									<Form.Input type='text' name='name' value={props.tourneyToEdit.name} onChange={props.handleEditChange}/>
									<Form.Input type='text' name='date' value={props.tourneyToEdit.date} onChange={props.handleEditChange}/>
									<Form.Input type='text' name='location' value={props.tourneyToEdit.location} onChange={props.handleEditChange}/>
									<Button type='submit' color='green'>Submit</Button>
								</Form>
							</Modal.Content>
						</Grid.Column>
						
					</Grid.Row>
				</Grid>
			</Modal>
			)

}

export default EditTourneyModal;
