import React, { Component } from 'react';
import TourneyList from '../TourneyList';
import CreateTourney from '../CreateTourney';// not sure if we can separate this onto another page???
import EditTourneyModal from '../EditTourneyModal';
import { Grid, Segment, Image, Container } from 'semantic-ui-react';
import pbIcon from '../pickIcon.png';
import MenuBar from '../Menu';
import CreateEvent from '../CreateEvent';
import EventList from '../EventList';
import EditEvent from '../EditEvent';
import ShowOneTourney from '../ShowOneTourney'



class TourneyContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			tourneys: [],
			tourneyToEdit: {
				name: '',
				location: '',
				date: '',
				id: ''
			},
			events: [],
			eventToEdit: {
				category: '',
				level: '',
				partner: '',
				results: '',
				id: ''
			},
			showEditModal: false,
			showEventModal: false,
			showOneTourneyModalOpen: false,
			showOneTourneyObject: {},
			showOneTourneyEvents: []

		}
	}

	componentDidMount(){
		this.getTourneys();
		
	}
	getTourneys = async () => {

		try {
			const tourneys = await fetch(process.env.REACT_APP_API_URL + '/api/v1/tourneys/',
				{ // added this callback to send over the session cookie
					credentials: 'include',
					method: "GET"
				});
			const parsedTourneys = await tourneys.json();
			console.log(parsedTourneys);

			this.setState({
				tourneys: parsedTourneys.data
			})
		
	} catch(err){
		console.log(err);
		}
	}

	getEvents = async (tourneyId) => {

		try {
			const events = await fetch(process.env.REACT_APP_API_URL + '/api/v1/events/' + tourneyId,
				{ // added this callback to send over the session cookie
					credentials: 'include',
					method: "GET"
				});
			const parsedEvents = await events.json();
			console.log(parsedEvents);

			this.setState({
				showOneTourneyEvents: parsedEvents.data
			})
		
	} catch(err){
		console.log(err);
		}
	}


// Add Tourney method
	addTourney = async (e, tourney) => {
		e.preventDefault();
		// console.log(tourney);

		try {

		// 	// Send JSON
		// 	// createdTourney variable storing response from Flask API
			const createdTourneyResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/tourneys/', {
				method: 'POST',
				credentials: 'include', // Send a session cookie along with our request
				body: JSON.stringify(tourney),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			
		// 	// turn the response from Flask into an object we can use
			const parsedResponse = await createdTourneyResponse.json();
			// console.log(parsedResponse, ' this is response');

		// 	// empty all issues in state to new array then
		// 	// adding issue we created to the end of it (created shows up first until refresh then at the bottom)

			this.setState({tourneys: [parsedResponse.data, ...this.state.tourneys]})
		
		} catch(err){
			// console.log('error');
			console.log(err);
		}
	}

// Add Event method
		addEvent = async (e, event) => {
		e.preventDefault();
		// console.log(event, "This is the event");

		try {

		// 	// Send JSON
		// 	// createdTourney variable storing response from Flask API
			const createdEventResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/events/', {
				method: 'POST',
				credentials: 'include', // Send a session cookie along with our request
				body: JSON.stringify(event),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			
		// 	// turn the response from Flask into an object we can use
			const parsedResponse = await createdEventResponse.json();
			// console.log(parsedResponse, ' this is response');

		// 	// empty all issues in state to new array then
		// 	// adding issue we created to the end of it (created shows up first until refresh then at the bottom)

			this.setState({
				events: [parsedResponse.data, ...this.state.events],
				showOneTourneyModalOpen: false
			})
		
		} catch(err){
			// console.log('error');
			console.log(err);
		}
	}



	deleteTourney = async (id) => {

		// console.log(id)
		const deleteTourneyResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/tourneys/' + id, {
													method: 'DELETE',
													credentials: 'include' // Send a session cookie along with our request
												});
		const deleteTourneyParsed = await deleteTourneyResponse.json();
		// console.log(deleteTourneyResponse)
		// if (deleteTourneyParsed.status.code === 200) {
		// 	// now that the db has deleted our item, we need to remove it from state
			this.setState({tourneys: this.state.tourneys.filter((tourney) => tourney.id !== id )})

		// } else {
		// 	alert ("You cannot delete an issue that you did not create")
		// }

		// console.log(deleteTourneyParsed, ' response from Flask server')
		// 	// then make the delete request, then remove the tourney from the state array using filter

	}

	deleteEvent = async (id) => {

	// console.log(id)
	const deleteEventResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/events/' + id, {
												method: 'DELETE',
												credentials: 'include' // Send a session cookie along with our request
											});
	const deleteEventParsed = await deleteEventResponse.json();
	// console.log(deleteEventResponse)
	// if (deleteTourneyParsed.status.code === 200) {
	// 	// now that the db has deleted our item, we need to remove it from state
		this.setState({events: this.state.events.filter((event) => event.id !== id )})

	// } else {
	// 	alert ("You cannot delete an issue that you did not create")
	// }

	// console.log(deleteTourneyParsed, ' response from Flask server')
	// 	// then make the delete request, then remove the tourney from the state array using filter

}

	showOneTourney = async (tourney) => {
		// console.log(tourney, ' tourney to show');
		// fetch to show the events associated with tourney
		await this.getEvents(tourney.id);
		this.setState({
			showOneTourneyModalOpen: true,
			showOneTourneyObject: tourney
	
		})
	}

	showEditModal = async (tourneyFromTheList) => {
		// console.log(tourneyFromTheList, ' tourneyToEdit ');
			// if(tourneyFromTheList.type === "tourney"){

			// } else (... === "event") {
			// 	do ....
			// }

		// if the user that is logged in created the tourney then show modal
		// else alert "You cannot edit a tourney that you did not create"
		
		

			this.setState({
				showEditModal: true,
				tourneyToEdit: {
					...tourneyFromTheList
				},	
			})
	}


	showEventModal = async (eventFromTheList) => {
	// console.log(eventFromTheList, ' eventToEdit ');
		// if(tourneyFromTheList.type === "tourney"){

		// } else (... === "event") {
		// 	do ....
		// }

	// if the user that is logged in created the event then show modal
	// else alert "You cannot edit an event that you did not create"
	
	

		this.setState({
			showEventModal: true,
			eventToEdit: {
				...eventFromTheList
			},	
		})
	}


	handleEditEventChange = (e) => {
    	this.setState({
      		eventToEdit: {
        		...this.state.eventToEdit,
        			[e.currentTarget.name]: e.currentTarget.value
      		},
  	})
    }	


  	closeAndEditEvent = async (e) => {
    	e.preventDefault();

    	try {

      		const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/events/' + this.state.eventToEdit.id, {
        		method : "PUT",
        		credentials: 'include', // Send a session cookie along with our request
        		body: JSON.stringify(this.state.eventToEdit),
        		headers: {
          			'Content-Type' : 'application/json'
        		}
      		});

      const editResponseParsed = await editResponse.json();
      // console.log('editResponseParsed: ', editResponseParsed);

      const newEventArrayWithEdit = this.state.events.map((event)=> {
        if(event.id === editResponseParsed.data.id) {
            event = editResponseParsed.data
        }
        return event;
        })
      
      this.setState({
        events: newEventArrayWithEdit,
        showEventModal: false,
        showOneTourneyModalOpen: false
      })

    } catch(err) {
      console.log(err);
    }

  }

	handleEditChange = (e) => {
    	this.setState({
      		tourneyToEdit: {
        		...this.state.tourneyToEdit,
        			[e.currentTarget.name]: e.currentTarget.value
      		},

  	})
    }

  	
  	closeAndEdit = async (e) => {
    	e.preventDefault();

    	try {

      		const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/tourneys/' + this.state.tourneyToEdit.id, {
        		method : "PUT",
        		credentials: 'include', // Send a session cookie along with our request
        		body: JSON.stringify(this.state.tourneyToEdit),
        		headers: {
          			'Content-Type' : 'application/json'
        		}
      		});

      const editResponseParsed = await editResponse.json();
      // console.log('editResponseParsed: ', editResponseParsed);

      const newTourneyArrayWithEdit = this.state.tourneys.map((tourney)=> {
        if(tourney.id === editResponseParsed.data.id) {
            tourney = editResponseParsed.data
        }
        return tourney;
        })
      
      this.setState({
        tourneys: newTourneyArrayWithEdit,
        showEditModal: false
      })

    } catch(err) {
      console.log(err);
    }

  }



  render () {
  		
  	return(
  	
  		<Container fluid>
			<MenuBar/>
			<Grid divided='vertically' centered stackable>
			    <Grid.Row columns={3}> 
			    <Grid.Column width={10}>
			      <Grid.Column width={3}></Grid.Column>
			        <TourneyList tourneys={this.state.tourneys}
			        			 deleteTourney={this.deleteTourney}
			        			 deleteEvent={this.deleteEvent}
			        			 showEditModal={this.showEditModal}
			        			 showOneTourney={this.showOneTourney}
			        			 showEventModal={this.showEventModal}
			        			 tourneyEvents={this.state.showOneTourneyEvents}
			        			 getTourneyEvents={this.getEvents}/>
			        <ShowOneTourney tourneyEvents={this.state.showOneTourneyEvents} open={this.state.showOneTourneyModalOpen} tourney={this.state.showOneTourneyObject} addEvent={this.addEvent} deleteEvent={this.deleteEvent} showEventModal={this.showEventModal}/>
			        {/*<EventList events={this.state.events} deleteEvent={this.deleteEvent} showEventModal={this.showEventModal}/>*/}
			      </Grid.Column>
			      <Grid.Column width={10}></Grid.Column>
			    	<EditTourneyModal handleEditChange={this.handleEditChange} open={this.state.showEditModal} tourneyToEdit={this.state.tourneyToEdit} closeAndEdit={this.closeAndEdit}/>
			    	<EditEvent handleEditEventChange={this.handleEditEventChange} open={this.state.showEventModal} eventToEdit={this.state.eventToEdit} closeAndEditEvent={this.closeAndEditEvent} />
			    </Grid.Row>


			    <Grid.Row columns={1}>
			      
			      <Grid.Column width={7}>
			        <CreateTourney addTourney={this.addTourney} />
			      </Grid.Column>
			      {/*<Grid.Column width={7}>
			      	<CreateEvent addEvent={this.addEvent} />
			      </Grid.Column>*/}
			      {/*<EditTourneyModal handleEditChange={this.handleEditChange} open={this.state.showEditModal} tourneyToEdit={this.state.tourneyToEdit} closeAndEdit={this.closeAndEdit}/>*/}
			    </Grid.Row>

			


			</Grid>
			</Container>
			)
		
	}

}

export default TourneyContainer