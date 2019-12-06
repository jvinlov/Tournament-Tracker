import React, { Component } from 'react';
import TourneyList from '../TourneyList';
import CreateTourney from '../CreateTourney';// not sure if we can separate this onto another page???
// import EditIssueModal from '../EditTourneyModal';
import { Grid, Segment, Image } from 'semantic-ui-react';
import pbIcon from '../pickIcon.png'
import MenuBar from '../Menu'



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
			showEditModal: false
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
// Add Tourney method
	addTourney = async (e, tourney) => {
		e.preventDefault();
		console.log(tourney);

		try {

		// 	// Send JSON
		// 	// createdTourney variable storing response from Flask API
			const createdTourneyResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/tourneys/', {
				method: 'POST',
				// credentials: 'include', // Send a session cookie along with our request
				body: JSON.stringify(tourney),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			
		// 	// turn the response from Flask into an object we can use
			const parsedResponse = await createdTourneyResponse.json();
			console.log(parsedResponse, ' this is response');

		// 	// empty all issues in state to new array then
		// 	// adding issue we created to the end of it (created shows up first until refresh then at the bottom)

			this.setState({tourneys: [parsedResponse.data, ...this.state.tourneys]})
		
		} catch(err){
			// console.log('error');
			console.log(err);
		}
	}

	deleteTourney = async (id) => {

		console.log(id)
		// const deleteTourneyResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/tourneys/' + id, {
		// 											method: 'DELETE',
		// 											credentials: 'include' // Send a session cookie along with our request
		// 										});
		// const deleteTourneyParsed = await deleteTourneyResponse.json();
		// console.log(deleteTourneyResponse)
		// if (deleteTourneyParsed.status.code === 200) {
		// 	// now that the db has deleted our item, we need to remove it from state
		// 	this.setState({tourneys: this.state.tourneys.filter((issue) => tourneys.id !== id )})

		// } else {
		// 	alert ("You cannot delete an issue that you did not create")
		// }

		// console.log(deleteTourneyParsed, ' response from Flask server')
		// 	// then make the delete request, then remove the dog from the state array using filter

	}

	openEditModal = async (tourneyFromTheList) => {
		console.log(tourneyFromTheList, ' tourneyToEdit ');

		// if the user that is logged in created the issue then show modal
		// else alert "You cannot edit an issue that you did not create"
		
		

			// this.setState({
			// 	showEditModal: true,
			// 	tourneyToEdit: {
			// 		...tourneyFromTheList
			// 	}
			// })
	}
      	// } else { 
      	// 	alert("You cannot edit an issue that you did not create")
      	// }	

      

	// handleEditChange = (e) => {
 //    	this.setState({
 //      		tourneyToEdit: {
 //        		...this.state.tourneyToEdit,
 //        [e.currentTarget.name]: e.currentTarget.value
 //      		}
 //    	})
 //  	}

  	

  	// closeAndEdit = async (e) => {
   //  	e.preventDefault();

    	// try {

     //  		const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/tourneys/' + this.state.tourneyToEdit.id, {
     //    		method : "PUT",
     //    		credentials: 'include', // Send a session cookie along with our request
     //    		body: JSON.stringify(this.state.tourneyToEdit),
     //    		headers: {
     //      			'Content-Type' : 'application/json'
     //    		}
     //  		});

     //  const editResponseParsed = await editResponse.json();
     //  console.log('editResponseParsed: ', editResponseParsed);

     //  const newTourneyArrayWithEdit = this.state.tourneys.map((tourney)=> {
     //    if(tourney.id === editResponseParsed.data.id) {
     //        tourney = editResponseParsed.data
     //    }
     //    return tourney;
     //    })
      
    //   this.setState({
    //     tourneys: newTourneyArrayWithEdit,
    //     showEditModal: false
    //   })

    // } catch(err) {
    //   console.log(err);
    // }

  // }

  render () {
  	return(
  	
  
			<Grid divided='vertically' centered stackable>
			    <Grid.Row columns={3}>
			      <Grid.Column width={3}></Grid.Column>
			      <Grid.Column width={10}>
					<MenuBar/>
			        <TourneyList tourneys={this.state.tourneys}/>

			      </Grid.Column>
			      <Grid.Column width={3}></Grid.Column>
			    </Grid.Row>


			    {/*<Grid.Row columns={3}>
			      <Grid.Column width={3}></Grid.Column>
			      <Grid.Column width={10}>
			        <CreateTourney addTourney={this.addTourney} />
			      </Grid.Column>
			      <Grid.Column width={3}></Grid.Column>
			      {/*<EditTourneyModal handleEditChange={this.handleEditChange} open={this.state.showEditModal} tourneyToEdit={this.state.tourneyToEdit} closeAndEdit={this.closeAndEdit}/>*/}
			    {/*</Grid.Row>*/}
			</Grid>
			)
	}

}

export default TourneyContainer