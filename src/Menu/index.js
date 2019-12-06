import React, { Component } from 'react';
import { Grid, Segment, Image, Menu } from 'semantic-ui-react';
import pbIcon from '../pickIcon.png'
import {Link} from 'react-router-dom'

class MenuBar extends Component {
  state = {}

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })


	render(){

			const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <Image src={pbIcon} avatar/>
        </Menu.Item>

        <Menu.Item>
          <Link to='/CreateTourney'>Create Tournament</Link>
        </Menu.Item>
        
     

        <Menu.Item>
          <Link to='/tourneys'>Tournament List</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to='/Login'>Login</Link>
          
        </Menu.Item>

        <Menu.Item>
         <Link to='/Register'>Register</Link>
       
        </Menu.Item>
      </Menu>

      )
  }

}

export default MenuBar;
