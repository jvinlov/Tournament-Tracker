import React from 'react';
import { Card, Button, Grid, Header, Form} from 'semantic-ui-react'

function EventList(props) {

	const events = props.events.map((event) => {

		return (

			<Card key={event.id})>
				<Card.Content>
					<Card.Header>{event.category}, {event.level}, {event.partner}</Card.Header>
				</Card.Content>
			</Card>
	})


}

