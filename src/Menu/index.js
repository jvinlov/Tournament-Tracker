import React, { Component } from 'react';
import { Grid, Segment, Image, Menu } from 'semantic-ui-react';
import pbIcon from '../pickIcon.png'

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

        <Menu.Item
          name='Create Tournament'
          active={activeItem === 'Create Tournament'}
          onClick={this.handleItemClick}
        >
          Create Tournament
        </Menu.Item>

        <Menu.Item
          name='Tournament List'
          active={activeItem === 'Tournament List'}
          onClick={this.handleItemClick}
        >
          Tournament List
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>

        <Menu.Item
          name='Register'
          active={activeItem === 'Register'}
          onClick={this.handleItemClick}
        >
          Register
        </Menu.Item>
      </Menu>

      )
  }

}

export default MenuBar;
