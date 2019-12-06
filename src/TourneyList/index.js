import React from 'react';
import { Card, Button, Checkbox, Grid, Header, Form} from 'semantic-ui-react';

function TourneyList(props){

	const tourneys = props.tourneys.map((tourney) => {
		// THIS IS A CHECK FOR LOGIN
		// if(localStorage.getItem('sessionId') === issue.user.toString()){
		console.log(tourney)
		return (

			<Card fluid key={tourney.id}>
				<Card.Content>
					<Card.Header>Name: {tourney.name}</Card.Header>
					<Card.Meta>
						<span>Location: {tourney.location}</span>
					</Card.Meta>
					<Card.Meta>
						<span>Date: {tourney.date}</span>
					</Card.Meta>

					{/*<Card.Description>{event.id}</Card.Description>*/}
					
					
				</Card.Content>
				{/*<Card.Content extra>
            		<Button onClick={() => props.deleteTourney(tourney.id)}>Delete Issue</Button>
            		<Button onClick={() => props.openEditModal(tourney)}>Edit Issue</Button>

          		
          		</Card.Content>*/}
          	</Card>
          )
		}
	)
		return (
		<Card.Group>
			{ tourneys }
		</Card.Group>
	) 
}


export default TourneyList
