import React from 'react';
import { Modal, Form, Button, Label, Header, Grid }from 'semantic-ui-react'
						
const EditEvent = (props) => {
	console.log(props)
		return (

			<Modal open={props.open}>
				<Grid divied='vertical' centered stackable>
						<Grid.Column width={10}>
							<Header>Edit Event</Header>
							<Modal.Content>
								<Form onSubmit={props.closeAndEditEvent}>
									<Label>Event</Label>
									<Form.Input type='text' name='category' value={props.eventToEdit.category} onChange={props.handleEditEventChange}/>
									<Form.Input type='text' name='level' value={props.eventToEdit.level} onChange={props.handleEditEventChange}/>
									<Form.Input type='text' name='partner' value={props.eventToEdit.partner} onChange={props.handleEditEventChange}/>
									<Form.Input type='text' name='results' value={props.eventToEdit.results} onChange={props.handleEditEventChange}/>
									<Button type='submit' color='green'>Submit Event</Button>
								</Form>
							</Modal.Content>
						</Grid.Column>
				</Grid>
			</Modal>
			)
}

export default EditEvent;
