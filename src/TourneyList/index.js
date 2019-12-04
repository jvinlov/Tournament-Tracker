import React from 'react';
import { Card, Button, Checkbox, Grid, Header, Form} from 'semantic-ui-react';

function TourneyList(props){

	const tourneys = props.tourneys.map((issue) => {
		// THIS IS A CHECK FOR LOGIN
		// if(localStorage.getItem('sessionId') === issue.user.toString()){
		console.log(tourney)
		return (

			<Card fluid key={tourney.id}>
				<Card.Content>
					<Card.Header>{tourney.name}, {tourney.location}, / {tourney.date} </Card.Header>
					{/*<Card.Description>Subject Description</Card.Description>*/}
					
					
				</Card.Content>
				<Card.Content extra>
            		<Button onClick={() => props.deleteIssue(tourney.id)}>Delete Issue</Button>
            		<Button onClick={() => props.openEditModal(tourney)}>Edit Issue</Button>

          		
          		</Card.Content>
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
