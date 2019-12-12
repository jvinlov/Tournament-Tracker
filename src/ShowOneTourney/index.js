import React from 'react';
import {Form, Button, Label, Header, Grid, Card, Modal }from 'semantic-ui-react'
import CreateEvent from "../CreateEvent"
import EventList from '../EventList'


const ShowOneTourney = (props) => {
	// console.log(props)
	// console.log(props.getTourneyEvents(props.tourneyId))

	const tourneyEvents = props.tourneyEvents.map(event=>{
		if(event.id===props.tourneyId){
			console.log(event)
			return <h1>event.category</h1>
		}
	});
	
		// tourney.type = "tourney"
		return (
				<Modal open={props.open}>
				<Grid  centered stackable textAlign='center' verticalAlign='middle'>
					<Grid.Row columns={2}>
						<Grid.Column width={10}>
							<Header>Selected Tourney</Header>
							{tourneyEvents}
							<Card>

								<Card.Content>
									<Card.Header>Name: {props.tourney.name}</Card.Header>
										<Card.Meta>
										<span>Location: {props.tourney.location}</span>
										</Card.Meta>
									<Card.Meta>
										<span>Date: {props.tourney.date}</span>
									</Card.Meta>
							
								</Card.Content>	
								<EventList events={props.tourneyEvents} deleteEvent={props.deleteEvent} showEventModal={props.showEventModal}/>	
								
							</Card>
							<CreateEvent tourneyId={props.tourneyId} addEvent={props.addEvent}/>
						</Grid.Column>
						
					</Grid.Row>
				</Grid>
				</Modal>
		
			)
	
}



export default ShowOneTourney;